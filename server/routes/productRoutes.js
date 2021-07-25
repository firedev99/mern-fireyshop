import express from "express";
// controllers
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { isAdmin, loginCheck } from "../middlewares/authMiddleware.js";

const router = express.Router();

// fetch all products
router.route('/').get(getProducts).post(loginCheck, isAdmin, createProduct);
// fetch specific product
router.route('/:id').get(getProductById).put(loginCheck, isAdmin, updateProduct).delete(loginCheck, isAdmin, deleteProduct);

export default router;