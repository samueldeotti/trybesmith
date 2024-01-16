import { Request, Response } from 'express';
import { productsService } from '../services';

async function create(req: Request, res: Response) {
  const { data } = await productsService.create(req.body);
  res.status(201).json(data);
}

async function getAll(_req: Request, res: Response) {
  const { data } = await productsService.getAll();
  res.status(200).json(data);
}

export default {
  create,
  getAll,
};