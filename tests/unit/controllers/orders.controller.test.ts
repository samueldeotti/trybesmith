import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import {ordersService} from '../../../src/services/index';
import {ordersControllers} from '../../../src/controllers/index';
import OrderModel from '../../../src/database/models/order.model';


chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Verifica a Order', async function() {
    const orders = [
      OrderModel.build( {
        id: 2,
        userId: 3,
        productIds: [3, 4],
      })
    ]
    const serviceResponse: any = {
      status: 'SUCCESFUL',
      data: orders,
    };
    sinon.stub(ordersService, 'getAll').resolves(serviceResponse);
    await ordersControllers.getAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(orders)
  })

});
