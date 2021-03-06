module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'google_id', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'google_id');
  },
};
