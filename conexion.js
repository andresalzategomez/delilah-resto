const Sequelize = require('sequelize')
const path = 'mysql://root:root@localhost:3306/delilah' // .env

const sequelize = new Sequelize(path, {
    dialect: 'mysql',
    operatorsAliases: 0 ,
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a Base de Datos.');
    }).catch(err => {
        console.error('Error de conexion:', err);
    })

module.exports = sequelize;