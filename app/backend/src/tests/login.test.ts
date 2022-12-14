import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes acerca da rota /login', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon.stub(User, 'findOne').resolves({
      id: 1,
      username: 'Example',
      role: 'user',
      email: 'example@example.com',
      // https://bcrypt-generator.com/
      password: '$2a$12$fulHGoHQNuhcBSvCi1ru0ek4MupdpyeSA317Q4rNwSl8.s/F0mV0m'
    } as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Verifica se é possível fazer login', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: "example@example.com",
        password: "password"
      });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body.token).to.be.string;
  });

  it('Verifica se ao tentar fazer uma requisição sem passar \'email\' retorna um status 400 e message: \'All fields must be filled\' ', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        password: "password"
      });

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      message: 'All fields must be filled'
    });
  });

  it('Verifica se ao tentar fazer uma requisição sem passar \'password\' retorna um status 400 e message: \'All fields must be filled\'', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: "example@example.com",
      });

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      message: 'All fields must be filled'
    });
  });

  it('Verifica se ao tentar fazer uma requisição sem passar \'email\' e \'password\', retorna um status 400 e message: \'All fields must be filled\' ', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({});

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      message: 'All fields must be filled'
    });
  });

  it('Verifica se retorna um status 401 e uma message \'Incorrect email or password\' ao passar um email inválido ', async () => {
    (User.findOne as sinon.SinonStub).restore();
    sinon.stub(User, 'findOne').resolves(undefined);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: "example.com",
        password: "password"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      message: 'Incorrect email or password'
    });
  });

  it('Verifica se retorna um status 401 e uma message \'Incorrect email or password\' ao passar uma senha com menos de 6 dígitos', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: "example@example.com",
        password: "p"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      message: 'Incorrect email or password'
    });
  });
});