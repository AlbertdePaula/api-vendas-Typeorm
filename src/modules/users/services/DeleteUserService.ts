import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface Irequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: Irequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);

    const product = await usersRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    await usersRepository.remove(product);
  }
}

export default DeleteUserService;
