import { Router } from 'express';
import controllerLogin from '../controllers/login.controller';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', loginValidation, controllerLogin);

export default loginRouter;
