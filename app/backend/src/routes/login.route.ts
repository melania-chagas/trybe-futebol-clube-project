import { Router } from 'express';
import { controllerGetUserType, controllerLogin } from '../controllers/login.controller';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.get('/validate', controllerGetUserType);
loginRouter.post('/', loginValidation, controllerLogin);
export default loginRouter;
