import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface Irequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: Irequest): Promise<void> {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customer = await customerRepository.findOne(id);

    if (!customer) {
      throw new AppError('User not found.');
    }

    await customerRepository.remove(customer);
  }
}

export default DeleteCustomerService;
