import db, {replaceGames} from '../db';

function getGames() {
  return db.games;
}

function addGame(game){
  console.log("hue", game)
  //replaceGames(db.games)
}

function getScores() {
  return db.scores;
}

export default { getGames, addGame, getScores }