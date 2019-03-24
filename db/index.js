import jsonfile from 'jsonfile'

import games from './games.json'
import scores from './scores.json'

// mock db update, installing a complete db engine for a POST action is an overkill
export const updateGames = (games) => {
  jsonfile.writeFile('./db/games.json', games)
    .then(res => {
      console.log('Games write complete')
    })
    .catch(error => console.error(error))
}

export const updateScores = (scores) => {
  jsonfile.writeFile('./db/scores.json', scores)
    .then(res => {
      console.log('Scores write complete')
    })
    .catch(error => console.error(error))
}


export default { games, scores };