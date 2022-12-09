import { NextFunction, Request, Response } from 'express';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!regex.test(email)) {
    return res.status(401).json({
      message: 'Incorrect email or password',
    });
  }

  if (password <= 6) {
    return res.status(401).json({
      message: 'Incorrect email or password',
    });
  }

  next();
};

export default loginValidation;
