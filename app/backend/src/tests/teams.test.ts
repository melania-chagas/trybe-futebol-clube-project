import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';
import teamsMock from './mocks/teamsMock';
import teamMock from './mocks/teamMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes acerca da rota /teams', () => {
  let chaiHttpResponse: Response;
  

  beforeEach(async () => {
    sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);
  });

  afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Verifica se retorna uma lista de times', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teamsMock);
  });

});

describe('Testes acerca da rota /teams/:id', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon.stub(Team, 'findOne').resolves(teamMock as Team);
  })

  afterEach(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('Verifica se é possível buscar um time pelo id', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teamMock);
  });

})