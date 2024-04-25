import express from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';
import { admin } from '../middleware/authMiddleware.js'; // Remove protect middleware

const router = express.Router();

// Remove protect middleware from routes
router.route('/').post(addOrderItems).get(admin, getOrders);
router.route('/mine').get(getMyOrders);
router.route('/:id').get(getOrderById);
router.route('/:id/pay').put(updateOrderToPaid);
router.route('/:id/deliver').put(admin, updateOrderToDelivered);

export default router;
