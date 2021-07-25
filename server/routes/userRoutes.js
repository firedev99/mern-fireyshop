import express from "express";
// controllers
import { deleteUser, getUserById, getUserList, getUserProfile, registerUser, updateUser, updateUserProfile, userAuth } from "../controllers/userController.js";
// middleware
import { isAdmin, loginCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

// registration
router.route('/').post(registerUser).get(loginCheck, isAdmin, getUserList);
// login
router.post('/login', userAuth);

router.route('/profile').get(loginCheck, getUserProfile).put(loginCheck, updateUserProfile)
router.route('/:id').delete(loginCheck, isAdmin, deleteUser).get(loginCheck, isAdmin, getUserById).put(loginCheck, isAdmin, updateUser);

export default router;