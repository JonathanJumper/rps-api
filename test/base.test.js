import { expect } from 'chai'

export function expectResponse(res) {
  expect(res.body).to.have.property("message");
  expect(res.body.message).to.be.an("string");
  expect(res.body).to.have.property("success");
  expect(res.body.success).to.be.an("boolean");
};

export function isValidGame(game) {
  expect(game).to.have.property("player1");
  expect(game.player1).to.be.a("string");
  expect(game).to.have.property("player2");
  expect(game.player2).to.be.a("string");
  expect(game).to.have.property("player1Score");
  expect(game.player1Score).to.be.a("number");
  expect(game).to.have.property("player2Score");
  expect(game.player2Score).to.be.a("number");
}

export function isValidScore(score) {
  expect(score).to.have.property("player");
  expect(score.player).to.be.a("string");
  expect(score).to.have.property("wins");
  expect(score.wins).to.be.a("number");
}