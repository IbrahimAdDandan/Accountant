const {
    Sequelize
} = require('sequelize');
const env = require('./environment');

const sequelize = new Sequelize(env.databaseName, env.databaseUsername, env.databasePassword, {
    host: env.databaseHost,
    dialect: env.databaseDialect
});


module.exports.testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


module.exports.getSequelize = () => {
    return new Sequelize(env.databaseName, env.databaseUsername, env.databasePassword, {
        host: env.databaseHost,
        dialect: env.databaseDialect
    });
};