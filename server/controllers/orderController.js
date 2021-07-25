import Order from "../model/orderModel.js";

export const addOrderItems = async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, totalPrice, paymentResult } = req.body;
    try {
        if (orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error('No order items');
        } else {
            const order = new Order({
                user: req.user._id,
                orderItems,
                totalPrice,
                shippingAddress,
                paymentMethod,
                paymentResult
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



export const getOrderbyId = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate('user', 'name email');
        if (order) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error('Order not found');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
};

export const getOrdersList = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
};

export const updateDelivery = async (req, res) => {
    const { id } = req.body;
    const order = await Order.findById(id);
    try {
        if (order) {
            order.isDelivered = true;
            order.deliveredAt = Date.now();

            const updatedOrder = await order.save();
            res.status(201).json(updatedOrder);
        } else {
            throw new Error('Order not found');
        }
    } catch {
        res.status(404).json({ message: error.message })
    }
};