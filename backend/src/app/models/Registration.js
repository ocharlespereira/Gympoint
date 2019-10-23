import Sequelize, { Model } from 'sequelize';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        student_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        total_price: Sequelize.FLOAT,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userVinc' });
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'studentVinc',
    });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'planVinc' });
  }
}

export default Registration;
