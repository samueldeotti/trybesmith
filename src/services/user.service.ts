import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';

type Params = {
  username: string,
  password: string,
};

type Token = {
  token: string,
};

function generateToken(payload: { username: string, id: number }): string {
  const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret');
  return token;
}

async function login({ username, password }: Params): Promise<ServiceResponse<Token>> {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const [user] = await UserModel.findAll({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = generateToken({ username, id: user.dataValues.id });

  return { status: 'SUCCESFUL', data: { token } };
}

export default {
  login,
};