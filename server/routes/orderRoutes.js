import express from "express";
// controllers
import { addOrderItems, getOrderbyId, getOrdersList, getUserOrders, updateDelivery } from "../controllers/orderController.js";
import { isAdmin, loginCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

// create order items
router.route('/').get(loginCheck, isAdmin, getOrdersList).post(loginCheck, addOrderItems);
router.route('/orderlist').get(loginCheck, getUserOrders);
router.route('/:id').get(loginCheck, getOrderbyId);
router.route('/order/delivered').put(loginCheck, isAdmin, updateDelivery);

export default router;