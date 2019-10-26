// import * as Yup from 'yup';

import Queue from '../../lib/Queue';

import HelpOrder from '../models/HelpOrder';
import HelpOrderAnswerMail from '../jobs/HelpOrderAnswerMail';
import Student from '../models/Student';

class AnswerController {
  async update(req, res) {
    const { helpOrderId } = req.params;

    if (!helpOrderId) {
      return res.status(400).json({ error: 'Help ordder not provided' });
    }

    const helpOrder = await HelpOrder.findOne({
      where: { id: helpOrderId },
    });

    if (!helpOrder) {
      return res.status(400).json({ error: 'Help order does not exist' });
    }

    if (helpOrder.answer_at) {
      return res.status(400).json({ error: 'Help order already answered' });
    }

    const student = await Student.findOne({
      where: { id: helpOrder.student_id },
    });

    const { answer } = req.body;

    const { id, question, answer_at } = await helpOrder.update({
      answer,
      answer_at: new Date(),
    });

    // Enviar e-mail com resposta da pergunta do usuário
    await Queue.add(HelpOrderAnswerMail.key, {
      student,
      question,
      answer,
    });

    return res.json({ id, question, answer, answer_at });
  }
}

export default new AnswerController();
