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
        res.json({events: events});
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Get events in 3 months
export const getEventCount = async (req, res) => {

    try {
        const ret = await Event.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(Sequelize.col("start_date"), Op.lte, req.params.end),
                    Sequelize.where(Sequelize.col("end_date"), Op.gte, req.params.start),
                ],
            },
            attributes: ["start_date", "end_date"]
        });

        res.json({events: ret});
    } catch (error) {
        res.json({ message: error.message });
    }
}

