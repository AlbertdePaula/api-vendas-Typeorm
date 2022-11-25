import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordcontroller from '../controllers/ForgotPasswordController';
import ResetPasswordcontroller from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPesswordController = new ForgotPasswordcontroller();
const resetPasswordcontroller = new ResetPasswordcontroller();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPesswordController.create,
);

passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordcontroller.create,
);

export default passwordRouter;
