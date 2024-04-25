import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';
// import { protect, admin } from '../middleware/authMiddleware.js'; // Remove protect middleware

const router = express.Router();

router.route('/').post(registerUser).get(getUsers); // Remove protect middleware
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile);
router
  .route('/:id')
  .delete(deleteUser)
  .get(getUserById)
  .put(updateUser);

export default router;
