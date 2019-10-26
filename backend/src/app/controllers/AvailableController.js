import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class AvailableController {
  async index(req, res) {
    const available = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'question'],
      include: [
        {
          model: Student,
          as: 'studentHelpOrderVinc',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(available);
  }
}

export default new AvailableController();
