import OrderModel from '../database/models/order.model';

async function getAll() /*:  Promise<ServiceResponse<ProductType[]>> */ {
  const allOrders = await OrderModel.findAll();
  const formatedOrders = '';
  
  return { status: 'SUCCESFUL', data: formatedOrders };
}

export default {
  getAll,
};