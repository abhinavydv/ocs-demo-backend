import express from "express";
import { getEvents, getEventCount } from "../controllers/Event.js"

const router = express.Router();
router.get('/events/:date', getEvents);
router.get('/eventcount/:start/:end', getEventCount);

export default router;
