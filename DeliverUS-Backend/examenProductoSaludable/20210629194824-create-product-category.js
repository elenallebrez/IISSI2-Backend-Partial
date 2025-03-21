module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      fats: Sequelize.DOUBLE,
      proteins: Sequelize.DOUBLE,
      carbs: Sequelize.DOUBLE,
      calories: Sequelize.DOUBLE
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductCategories')
  }
}
