import db, { updateGames, updateScores} from '../db';

function getGames() {
  return db.games;
}

function addGame(game){
  // add game
  db.games.unshift(game)
  updateGames(db.games)

  // increment score
  if (game.player1Score > game.player2Score)
    incrementWin(game.player1)
  else
    incrementWin(game.player2)

}

function getScores() {
  return db.scores;
}

function incrementWin(winner){
  console.log("winnn", winner)
  const score = db.scores.find(score => score.player.toLowerCase() === winner.toLowerCase() )
  if (typeof score !== "undefined"){
    score.wins++;
  }
  else{
    db.scores.push({
      player: winner,
      wins: 1
    })
  }
  db.scores.sort( (scoreA, scoreB) => {
    return scoreB.wins - scoreA.wins
  })
  updateScores(db.scores)
}

export default { getGames, addGame, getScores }