import { Sequelize } from "sequelize";

function getconnection(){
    return new Sequelize("postgres","postgres","Raju@123",{
        host : 'localhost',
        port : 5432,
        dialect : 'postgres',
    })
}

const sequelizeconnection = getconnection();

export default sequelizeconnection;
