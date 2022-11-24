import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordcontroller from '../controllers/ForgotPasswordController';

const passwordRouter = Router();
const forgotPesswordController = new ForgotPasswordcontroller();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPesswordController.create,
);

export default passwordRouter;
