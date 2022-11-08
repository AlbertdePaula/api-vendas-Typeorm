import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from './../typeorm/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';

interface Irequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: Irequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export default ShowProductService;
