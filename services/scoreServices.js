
/**
 * GET /api/v1/top
 */
function top(req, res) {
  return res.status(200).send({
    success: 'true',
    message: 'top scores retrieved successfully',
    top: [
      {
        user: 'Jonathan',
        wins: 12
      },
      {
        user: 'Nicole',
        wins: 10
      },
      {
        user: 'Laura',
        wins: 6
      },
      {
        user: 'Juan',
        wins: 4
      },

    ]
  })
}

/**
 * GET /api/v1/last
 */
function last(req, res) {
  return res.status(200).send({
    success: 'true',
    message: 'last scores retrieved successfully',
    last: [
      {
        player1: 'Jonathan',
        player2: 'Nicole',
        score: '2 - 1'
      }
    ]
  })
}

export default { top, last }
