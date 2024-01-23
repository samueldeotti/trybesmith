import { expect } from 'chai';
import sinon from 'sinon';
import {usersService} from '../../../src/services'
import UserModel from '../../../src/database/models/user.model';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Verifica o login sem um username', async function() {
    const credentials = { username: '', password: '12345' };
    const serviceResponse = await usersService.login(credentials);
    expect(serviceResponse.status).to.deep.equal('INVALID_DATA');
    expect(serviceResponse.data).to.deep.equal( { message: '"username" and "password" are required' })
  });

  it('Verifica se existe o usuario', async function() {
    const credentials = {username: 'Sammy', password: '12345'};
    sinon.stub(UserModel, 'findAll').resolves([]);
    const serviceResponse = await usersService.login(credentials);
    expect(serviceResponse.status).to.deep.equal('UNAUTHORIZED')
    expect(serviceResponse.data).to.deep.equal({ message: 'Username or password invalid' })
  });


});
