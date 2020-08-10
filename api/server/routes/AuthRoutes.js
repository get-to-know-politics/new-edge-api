import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();


authRouter.post('/signin', AuthController.signIn);
authRouter.post('/signup', AuthController.signUp);
authRouter.post('/signout', AuthController.signOut);

export default authRouter;