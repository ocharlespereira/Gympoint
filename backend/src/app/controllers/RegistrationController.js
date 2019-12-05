import { addMonths, parseISO, startOfHour } from 'date-fns';

import * as Yup from 'yup';

import NewRegistrationMail from '../jobs/NewRegistrationMail';
import Queue from '../../lib/Queue';

import Registration from '../models/Registration';
import User from '../models/User';
import Plan from '../models/Plan';
import Student from '../models/Student';

class RegistrationController {
  async index(req, res) {
    // Pagination
    const { page = 1 } = req.query;

    // What will appear on Json
    const registration = await Registration.findAll({
      attributes: [
        'id',
        'start_date',
        'end_date',
        'total_price',
        'active',
        'canceled_at',
      ],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'userVinc',
          attributes: ['id', 'name'],
        },
        {
          model: Student,
          as: 'studentVinc',
          attributes: ['id', 'name'],
        },
        {
          model: Plan,
          as: 'planVinc',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });
    return res.json(registration);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { user_id, student_id, plan_id } = req.body;

    const studentExist = await Student.findByPk(student_id);

    if (!studentExist) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    // validates end date according to start date and calculates price
    const start_date = startOfHour(parseISO(req.body.start_date));
    const end_date = addMonths(start_date, plan.duration);
    const total_price = plan.price * plan.duration;

    const registration = await Registration.create({
      user_id,
      student_id,
      plan_id,
      start_date,
      end_date,
      total_price,
    });

    /**
     * Notify registration student email
     */

    await Queue.add(NewRegistrationMail.key, {
      student: studentExist,
      start_date,
      end_date,
      total_price,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      student_id: Yup.number().positive(),
      plan_id: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { start_date, student_id, plan_id } = req.body;

    let student = null;

    if (student_id) {
      student = await Student.findByPk(student_id);

      if (!student) {
        return res.status(400).json({ error: 'Student does not exist' });
      }
    }

    let newPlan = null;

    if (plan_id) {
      newPlan = await Plan.findByPk(plan_id);

      if (!newPlan) {
        return res.status(400).json({ error: 'Plan does not exist' });
      }
    }

    const registration = await Registration.findByPk(req.params.id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration does not exist' });
    }

    /**
     * Trying to update registration to another student_id
     */
    if (student && registration.student_id !== student.id) {
      /**
       * One student can't have two plans
       */
      const studentAlreadyHasPlan = await Registration.findOne({
        where: { student_id },
      });

      if (studentAlreadyHasPlan) {
        return res.status(400).json({ error: 'Student already has a plan' });
      }
    }

    const newRegistration = { start_date, student_id, plan_id };

    /**
     * New plan not provided / search for previous plan
     */
    if (!newPlan) {
      newPlan = await Plan.findByPk(registration.plan_id);

      if (!newPlan) {
        return res.status(400).json({
          error: "No previous plan, can't calculate price and duration",
        });
      }
    }

    /**
     * User wants to update start_date of registration
     */
    if (start_date) {
      newRegistration.end_date = addMonths(
        parseISO(start_date),
        newPlan.duration
      );
      newRegistration.total_price = newPlan.price * newPlan.duration;
    }

    if (plan_id) {
      newRegistration.total_price = newPlan.price * newPlan.duration;
    }

    const {
      id,
      student_id: new_student_id,
      plan_id: new_plan_id,
      start_date: new_start_date,
      end_date,
      total_price,
    } = await registration.update(newRegistration);

    return res.json({
      id,
      student_id: new_student_id,
      plan_id: new_plan_id,
      start_date: new_start_date,
      end_date,
      total_price,
    });
  }

  async delete(req, res) {
    const registration = await Registration.findByPk(req.params.id, {
      attributes: [
        'id',
        'start_date',
        'end_date',
        'total_price',
        'canceled_at',
      ],
      include: [
        {
          model: User,
          as: 'userVinc',
          attributes: ['id', 'name'],
        },
        {
          model: Student,
          as: 'studentVinc',
          attributes: ['id', 'name'],
        },
        {
          model: Plan,
          as: 'planVinc',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    // to keep track this will just be canceled
    registration.canceled_at = new Date();
    await registration.save();

    return res.json(registration);
  }
}

export default new RegistrationController();
