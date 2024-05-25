import { Router } from 'express';
import { createCategory, createThread, createPost } from '../controllers/forumController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.post('/category', authenticate, createCategory);
router.post('/thread', authenticate, createThread);
router.post('/post', authenticate, createPost);

export default router;
