import jsonfile from 'jsonfile'

import games from './games.json'
import scores from './scores.json'

export const replaceGames = (games) => {
  //games = games;
  jsonfile.writeFile('./db/test.json', games)
    .then(res => {
      console.log('Write complete')
    })
    .catch(error => console.error(error))
}

export default { games, scores };