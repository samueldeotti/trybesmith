import ProductModel, { ProductInputtableTypes, ProductSequelizeModel, 
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

type ProductType = Omit<Product, 'orderId'>;

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<ProductType>> {
  const { dataValues: { id, name, price } } = await ProductModel.create(product);
  
  return { status: 'SUCCESFUL', data: { id, name, price } };
}

async function getAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESFUL', data: products };
}

export default {
  create,
  getAll,
};