import Customer from '@modules/customers/typeorm/entities/Customer';
import AppError from '@shared/errors/AppError';
import { id } from 'date-fns/locale';
import { getCustomRepository } from 'typeorm';
import { OrdersRepository } from '../typeorm/repositories/OrdersRepository';
import Order from './../typeorm/entities/Order';
import CustomersRepository from './../../customers/typeorm/repositories/CustomersRepository';
import { ProductRepository } from './../../products/typeorm/repositories/ProductsRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

class CreateOrderService {
  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);
    const customerRepository = getCustomRepository(CustomersRepository);
    const productsRepository = getCustomRepository(ProductRepository);

    const customerExists = await ordersRepository.findById(customer_id);

    if (customerExists) {
      throw new AppError('Cold not find any customer with the given id.');
    }

    const existsProducts = await productsRepository.findAllByIds(products);

    if (!existsProducts.length) {
      throw new AppError('Cold not find any products with the given ids.');
    }

    const existsProductsIds = existsProducts.map(product => product.id);

    const checkInexistentProducts = products.filter(
      product => !existsProductsIds.includes(product.id),
    );
  }
}

export default CreateOrderService;
