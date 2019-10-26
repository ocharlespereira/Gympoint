import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import File from '../app/models/File';
import Plan from '../app/models/Plan';
import Registration from '../app/models/Registration';
import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';

import databaseConfig from '../config/database';

const models = [User, Student, File, Plan, Registration, Checkin, HelpOrder];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connecton = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connecton))
      .map(model => model.associate && model.associate(this.connecton.models));
  }
}

export default new Database();
