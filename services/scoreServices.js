import scoresController from '../controllers/scoresController'

/**
 * GET /api/v1/games
 */
function games(req, res) {
  const games = scoresController.getGames()
  return res.status(200).send({
    success: true,
    message: 'games retrieved successfully',
    games
  })
}


/**
 * POST /api/v1/games
 */
function addGame(req, res) {
  scoresController.addGame(req.body)
  return res.status(200).send({
    success: true,
    message: 'game added successfully'
  })
}

/**
 * GET /api/v1/scores
 */
function scores(req, res) {
  const scores = scoresController.getScores()
  return res.status(200).send({
    success: true,
    message: 'top scores retrieved successfully',
    scores
  })
}

export default { games, addGame, scores }
