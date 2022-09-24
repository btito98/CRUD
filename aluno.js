const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
const db = require('./db');

const Aluno = db.define('alunos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

console.log(Aluno === sequelize.models.Aluno);
module.exports = Aluno;