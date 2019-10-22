import Sequelize, { Model } from 'sequelize';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        total_price: Sequelize.FLOAT,
        canceled_at: Sequelize.DATE,
        height: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id', as: 'userVinc' });
    this.belongsTo(models.Student, {
      foreignKey: 'student',
      as: 'studentVinc',
    });
    this.belongsTo(models.Plan, { foreignKey: 'id', as: 'planVinc' });
  }
}

export default Registration;
