import { Request, Response } from 'express';
import { User } from './user.model';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};
