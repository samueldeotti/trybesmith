import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import {productsService} from '../../../src/services';
import allProducts from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Verifica a criação de um produto', async function() {

    const product = {
      id: 1,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 5,
    }
    const mockCreate = ProductModel.build(product);
    sinon.stub(ProductModel, 'create').resolves(mockCreate);
    const serviceResponse = await productsService.create(product);
    expect(serviceResponse.status).to.deep.equal('SUCCESFUL');
  });

  it('Verfica a listagem de produtos', async function() {
  
    sinon.stub(ProductModel, 'findAll').resolves(allProducts as any);
    const serviceResponse = await productsService.getAll();
    expect(serviceResponse.status).to.deep.equal('SUCCESFUL');
  
  });
});
