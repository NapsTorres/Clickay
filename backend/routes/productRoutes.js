import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
// import { protect, admin } from '../middleware/authMiddleware.js'; // Remove protect middleware

const router = express.Router();

// Remove protect middleware from routes
router.route('/').get(getProducts).post(createProduct);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/:id/reviews').post(createProductReview);

export default router;
