import playersJSON from './players.json';

export default function fetchPlayers() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(playersJSON);
    }, 500);
  });
}
