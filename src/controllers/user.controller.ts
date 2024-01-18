import { Request, Response } from 'express';
import { usersService } from '../services';

const responseStatus: any = {
  SUCCESFUL: 200,
  INVALID_DATA: 400,
  UNAUTHORIZED: 401,
};

async function login(req: Request, res: Response) {
  const { status, data } = await usersService.login(req.body);
  console.log(status, 'status', data, 'data');
  res.status(responseStatus[status]).json(data);
}

export default {
  login,
};