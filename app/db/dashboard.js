const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Dashboard extends Model {

    static associate({ User }) {       
        this.belongsTo(User, { foreignKey: 'ownerId', as: 'user' })
      }

    static associate({ Task }) {       
        this.hasMany(Task, { foreignKey: 'boardId', as: 'tasks' })
      }   

    toJSON() {
      return { ...this.get() }
    }
  }
  Dashboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a email' },
          notEmpty: { msg: 'email must not be empty' },
        },
      },
    },
    {
      sequelize,
      tableName: 'dashboards',
      modelName: 'Dashboard',
      timestamps: false
    }
  )
  return Dashboard
}
