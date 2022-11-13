import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UserController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.update,
);

usersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.delete,
);

export default usersRouter;
