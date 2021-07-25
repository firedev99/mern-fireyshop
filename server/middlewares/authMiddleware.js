import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const loginCheck = async (req, res, next) => {
    let token
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            req.user = await User.findById(decoded.id).select('-password');

            next();
        }

        if (!token) {
            res.status(401)
            throw new Error('Not authorized, token failed');
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

export const isAdmin = (req, res, next) => {
    try {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            res.status(401);
            throw new Error('Not authorized as an admin');
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};