import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Category from '../app/models/Category';
import Book from '../app/models/Book';
import User from '../app/models/User';
import UserBook from '../app/models/UserBook';
import Scholarity from '../app/models/Scholarity';
import Movie from '../app/models/Movie';

const models = [Category, Book, User, UserBook, Scholarity, Movie];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
