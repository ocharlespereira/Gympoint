// import Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({ error: 'Student not provided' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: { student_id: student.id },
      attributes: ['id', 'question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          as: 'studentHelpOrderVinc',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const { studentId } = req.params;

    const student = await Student.findOne({
      where: { id: studentId },
    });

    if (!student) {
      return res.status(400).json({ error: 'This user is not a provider' });
    }

    const { question } = req.body;

    const helpOrder = await HelpOrder.create({
      student_id: studentId,
      question,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
