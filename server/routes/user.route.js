import express from 'express';
// Controller Connection
import { deleteUser } from '../controllers/user.controller.js';
// Middleware Connection
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id', verifyToken, deleteUser);

export default router;
