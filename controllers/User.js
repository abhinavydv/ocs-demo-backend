import User from "../models/userModel.js";

export const register = async (req, res) => {
    res.json({
        message: "Registered",
        loggedIn: true
    })
}

export const login = async (req, res) => {
    res.json({
        message: "Logged in",
        loggedIn: true
    })
}

export const getLoggedInUser = async (req, res) => {
    res.json({
        user: "username",
        loggedIn: true
    })
}
