import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UserRepository';
import UsersTokensRepository from '../typeorm/repositories/UserTokensRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UsersTokensRepository);

    // eslint-disable-next-line no-console
    console.log({ email });

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not existss!');
    }

    const token = await userTokensRepository.generate(user.id);

    // eslint-disable-next-line no-console
    console.log(token); //mostrar dados no console
  }
}

export default SendForgotPasswordEmailService;
