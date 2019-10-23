import { addMonths, parseISO, startOfHour } from 'date-fns';
// import pt from 'date-fns/locale';
import * as Yup from 'yup';
// import Notification from '../schemas/Notification';

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

    const student = await Student.findByPk(student_id);

    if (!student) {
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
     * Notify registration student
     */
<<<<<<< HEAD
    // const user = await User.findByPk(user_id);

    // const formatedDate = format(
    //   start_date,
    //   "'dia' dd 'de' MMMM', às' H:mm'h às' yyyy",
    //   { locale: pt }
    // );

    // await Notification.create({
    //   content: `Novo agendamento de ${user.name} para ${formatedDate}`,
    //   user: user_id,
    // });
=======
    const user = await User.findByPk(user_id);

    const formatedDate = format(
      start_date,
      "'dia' dd 'de' MMMM', às' H:mm'h às' yyyy",
      { locale: pt }
    );

	// registration email
    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formatedDate}`,
      user: user_id,
    });
>>>>>>> origin/master

    return res.json(registration);
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
