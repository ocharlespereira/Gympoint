import Plan from '../models/Plan';
import User from '../models/User';

class PlanController {
  async index(req, res) {
    const plan = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
      include: [
        {
          model: User,
          as: 'userVincPlan',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(plan);
  }

  async store(req, res) {
    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const { id } = req.params;

    const planId = await Plan.findByPk(id);

    const { title, duration, price } = await planId.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const planId = await Plan.findByPk(id);

    if (planId.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to cancel this Plan.",
      });
    }

    const { title, duration, price } = await planId.delete(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }
}
export default new PlanController();
