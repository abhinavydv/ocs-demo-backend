import express from "express";
import { getEvents, getEventCount } from "../controllers/Event.js"

const router = express.Router();
router.get('/events/:date', getEvents);
router.get('/eventcount/:year/:month', getEventCount);

export default router;
