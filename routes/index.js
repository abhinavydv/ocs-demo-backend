import express from "express";
import {
  login,
  register,
  getLoggedInUser
} from "../controllers/User.js";
const router = express.Router();
router.post('/login', login);
router.post('/register', register);
router.get('/login', getLoggedInUser);

export default router;
