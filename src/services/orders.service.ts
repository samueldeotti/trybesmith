import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

type Product = {
  id: number;
};

type Order = {
  id: number;
  userId: number;
  productIds: Product[];
};

async function getAll(): Promise<ServiceResponse<Order[]>> {
  // pedi pro meu mano Gepetto
  const ordersWithProducts = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  const formatedOrders = ordersWithProducts
    .map((order) => order.dataValues)
    .map((order) => ({ ...order,
      productIds: order.productIds.map((product: Product) => product.id) }));

  return { status: 'SUCCESFUL', data: formatedOrders };
}

export default {
  getAll,
};