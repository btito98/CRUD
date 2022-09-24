const Sequelize = require('sequelize');

const sequelize = new Sequelize('testedb', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})


sequelize.authenticate()
    .then(() => {
        console.log("Conexão com sucesso");
    }).catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;