import Plan from '../models/Plan',
import User from '../models/User';

class TesteController {
  async index(req, res) {

    /**
     * Relação de tabelas pelo attribute
     */
    const plan = await Plan.findByPk({
      attributes: ['id', 'user_id', 'title', 'duration'],
      includes: [
        {
          model: User,
          as: 'userVincPlan',
          attributes: ['id', 'name'],
        }
      ],
    });
    //chama o nome do User
    const user = plan.userVincPlan.name;
    //chama plan title
    const plan = plan.title
  }
}

export default new TesteController()