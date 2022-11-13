import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface Irequest {
  id: string;
}

class ShowUserService {
  public async execute({ id }: Irequest): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default ShowUserService;
