import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

export const Event = db.define('event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    start_time: {
        type: DataTypes.TIME
    },
    end_time: {
        type: DataTypes.TIME
    },
    description: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    }
 }, {
    freezeTableName: true,
    timestamps: false
 });
