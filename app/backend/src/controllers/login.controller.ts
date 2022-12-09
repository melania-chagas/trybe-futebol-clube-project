import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { IValidateUser } from '../interfaces/IValidateUser';
import { IUser } from '../interfaces/IUser';

import { createToken, verifyToken } from '../auth/JWT';
import { serviceGetUserType, serviceLogin } from '../services/login.service';

const controllerLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await serviceLogin(email) as IUser;

  if (!user) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const { password: userPassword, id, username } = user;

  const isEqual = await bcrypt.compare(password, userPassword);

  if (!isEqual) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const token = createToken({ id, username });

  return res.status(200).json({ token });
};

const controllerGetUserType = async (req: Request, res: Response) => {
  const { authorization }: IValidateUser = req.headers;

  if (authorization) {
    const id = verifyToken(authorization);
    const role = await serviceGetUserType(id);
    return res.status(200).json({ role });
  }
};

export {
  controllerLogin,
  controllerGetUserType,
};
