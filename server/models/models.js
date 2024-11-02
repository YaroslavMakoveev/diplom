const sequelize = require('../db');
const{DataTypes} = require('sequelize');

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
    img: {type: DataTypes.STRING, allowNull: false, defaultValue: 'img'},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'USER'}
}
)

module.exports = {
    Users
};