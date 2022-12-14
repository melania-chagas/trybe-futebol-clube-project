import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

import Matches from '../database/models/Matches';
import {matchesMock, matchesInProgressMock, equalTeamsMock, teamsMock, loginMock} from './mocks/matchesMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testes acerca da rota /maches', () => {
  
  let chaiHttpResponse: Response;
  
  beforeEach(async () => {
    sinon.stub(Matches, 'findAll').resolves(matchesMock as unknown as Matches[]);
  });

  afterEach(()=>{
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Verifica se retorna a lista, sem filtro, de todas as partidas', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matchesMock);
  });

  it('Verifica a filtragem de partidas em progresso', async () => {
    (Matches.findAll as sinon.SinonStub).restore()

    sinon
      .stub(Matches, "findAll")
      .resolves(matchesInProgressMock as unknown as Matches[]);

    chaiHttpResponse = await chai
      .request(app).get('/matches?inProgress=true')

    expect(chaiHttpResponse.body).to.be.deep.equal(matchesInProgressMock);
  })

  it('Verifica se ao tentar inserir uma partida com times iguais retorna um status 422 com uma mensagem de erro ', async () => {
    const { body } = await chai
    .request(app)
    .post('/login')
    .send(loginMock);

    await chai
    .request(app)
    .post('/matches')
    .send(equalTeamsMock)
    .set('Authorization', body.token)
    .then((res) => {
      expect(res.status).to.be.equal(422);
      expect(res.body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams'})
    });
  })

  it('Verifica se é possível atualizar uma partida', async () => {
    sinon.stub(Matches, "update")
      .resolves([1] as [affectedCount: number]);

    chaiHttpResponse = (await chai
      .request(app)
      .patch('/matches/1')
      .send(teamsMock));

    expect(chaiHttpResponse.status).to.be.equals(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message:'Update completed'});

    (Matches.update as sinon.SinonStub).restore();
  });

  it('Verifica se é possível atualizar o \'inProgress\' de uma partida para \'false\'', async () => {
    sinon
      .stub(Matches, "update")
      .resolves();

    chaiHttpResponse = await chai
    .request(app)
    .patch('/matches/1/finish');

    expect(chaiHttpResponse.status).to.be.equals(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' });

    (Matches.update as sinon.SinonStub).restore();
  });
  
});