import * as Yup from 'yup';

import Student from '../models/Student';
import File from '../models/File';

class StudentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const student = await Student.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'age',
        'weight',
        'height',
        'avatar_id',
      ],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(student);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .strict()
        .required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number(),
      weigth: Yup.number(),
      heigth: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student email already exists.' });
    }

    const { id, name, age, weight, height } = await Student.create(req.body);

    return res.json({
      id,
      name,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().strict(),
      email: Yup.string().email(),
      age: Yup.number(),
      weigth: Yup.number(),
      heigth: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const { email } = req.body;

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res
          .status(400)
          .json({ error: 'This email is already in use by another student' });
      }
    }

    const { name, age, weigth, heigth } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weigth,
      heigth,
    });
  }

  async delete(req, res) {

    const student = await Student.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
    });

    await student.destroy();

    return res.json(student);
  }
}

export default new StudentController();
