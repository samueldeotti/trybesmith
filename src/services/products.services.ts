import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

type ProductType = Omit<Product, 'orderId'>;

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<ProductType>> {
  const { dataValues: { id, name, price } } = await ProductModel.create(product);
  
  return { status: 'SUCCESFUL', data: { id, name, price } };
}

async function getAll(): Promise<ServiceResponse<ProductType[]>> {
  const products = await ProductModel.findAll();
  const productsData = products.map(({ dataValues: { id, name, price } }) => ({ id, name, price }));
  
  return { status: 'SUCCESFUL', data: productsData };
}

export default {
  create,
  getAll,
};