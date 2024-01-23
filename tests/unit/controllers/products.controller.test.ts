import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import {productsService} from '../../../src/services/index';
import {productsControllers} from '../../../src/controllers/index';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import { ServiceResponse } from '../../../src/types/ServiceResponse';


chai.use(sinonChai);

const products = [
  ProductModel.build({
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  }),
]


describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Verifica se é possivel listar todos produtos', async function() {
    const serviceResponse: ServiceResponse<ProductSequelizeModel[]> = {
      status: 'SUCCESFUL',
      data: products,
    }
    sinon.stub(productsService, 'getAll').resolves(serviceResponse);
    await productsControllers.getAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  })


});
