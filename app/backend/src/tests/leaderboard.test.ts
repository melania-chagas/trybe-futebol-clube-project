import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import { Response } from 'superagent';

import Matches from '../database/models/Matches';
import allMatchesMock from './mocks/allMatchesMock';
import leaderboardHomeMock from './mocks/leaderboardHomeMock';
import leaderboardAwayMock from './mocks/leaderboardAwayMock';

const { app } = new App();

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes acerca da rota /leaderboard', () => {
  let chaiHttpResponse: Response;

  beforeEach(() => {
    sinon.stub(Matches, 'findAll').resolves( allMatchesMock as any);
  });

  afterEach(() => {
    (Matches.findAll as sinon.SinonStub).restore();
  });

  it('Verifica se retorna a classificação ordenada dos times mandantes (homeTeam) ', async () => {
    chaiHttpResponse = await chai 
      .request(app)
      .get('/leaderboard/home');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(leaderboardHomeMock);
  });

  it('Verifica se retorna a classificação ordenada dos times visitantes (awayTeam)', async () => {
    chaiHttpResponse = await chai 
      .request(app)
      .get('/leaderboard/away');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(leaderboardAwayMock);
  });
});