import { Event } from "../models/eventModel.js";
import { Sequelize } from "sequelize";

const Op = Sequelize.Op;
console.log(Op)

export const getEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(Sequelize.col("start_date"), Op.lte, req.params.date),
                    Sequelize.where(Sequelize.col("end_date"), Op.gte, req.params.date),
                ]
            }
        });
        res.json(events);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Event count for each day of month
export const getEventCount = async (req, res) => {
    console.log(req.params, req.params.month+"-__")
    try {
        const ret = await Event.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn("MONTH", Sequelize.col("start_date")), req.params.month),
                    Sequelize.where(Sequelize.fn("YEAR", Sequelize.col("start_date")), req.params.year),
                ],
            },
        });
        
        res.json(ret);
    } catch (error) {
        res.json({ message: error.message });
    }
}

