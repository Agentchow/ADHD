import { Request, Response } from 'express';
import Category from '../models/Category';
import Thread from '../models/Thread';
import Post from '../models/Post';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

export const createCategory = async (req: AuthRequest, res: Response): Promise<Response> => {
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};

export const createThread = async (req: AuthRequest, res: Response): Promise<Response> => {
  try {
    const { category, title, content } = req.body;
    const thread = new Thread({ category, user: req.user?._id, title, content });
    await thread.save();
    return res.status(201).json(thread);
  } catch (error) {
    return res.status(400).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};

export const createPost = async (req: AuthRequest, res: Response): Promise<Response> => {
  try {
    const { thread, content } = req.body;
    const post = new Post({ thread, user: req.user?._id, content });
    await post.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};
