import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: '34.50.92.133',
    dialect: 'mysql'
});

export default db;