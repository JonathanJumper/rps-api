import request from 'supertest'
import { expect } from 'chai'

import app from '../app'
import { expectResponse, isValidGame, isValidScore } from './base.test'

describe("scores services", () => {

  it("GET /api/v1/games", (done) => {
    request(app)
      .get('/api/v1/games')
      .expect('Content-Type', /json/)
      .expect(expectResponse)
      .expect(expectGames)
      .expect(200, done)
  })

  it("GET /api/v1/scores", (done) => {
    request(app)
      .get('/api/v1/scores')
      .expect('Content-Type', /json/)
      .expect(expectResponse)
      .expect(expectScores)
      .expect(200, done)
  })

})

function expectGames(res) {
  expect(res.body).to.have.property("games");
  expect(res.body.games).to.be.a("array");
  res.body.games.forEach(game => isValidGame(game))
}

function expectScores(res) {
  expect(res.body).to.have.property("scores");
  expect(res.body.scores).to.be.a("array");
  res.body.scores.forEach(score => isValidScore(score))
}

