import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';
import teamsMock from './mocks/teamsMock';

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