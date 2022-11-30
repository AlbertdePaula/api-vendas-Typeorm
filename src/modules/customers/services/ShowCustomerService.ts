import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface Irequest {
  id: string;
}

class ShowCustomerService {
  public async execute({ id }: Irequest): Promise<Customer | undefined> {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customer = await customerRepository.findOne(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    return customer;
  }
}

export default ShowCustomerService;
