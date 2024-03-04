import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const User = db.define('user', {
    uid: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true,
    timestamps: false
 });
 export default User;
