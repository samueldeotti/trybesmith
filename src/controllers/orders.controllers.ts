import { Request, Response } from 'express';
import { ordersService } from '../services';

async function getAll(_req: Request, res: Response) {
  const { data } = await ordersService.getAll();
  res.status(200).json(data);
}

export default {
  getAll,
};