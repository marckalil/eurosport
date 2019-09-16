import {call, put, takeEvery} from 'redux-saga/effects';
import fetchPlayers from '../api';
import {
  GET_PLAYERS_REQUEST,
  getPlayersListSuccess,
  getPlayersListFailure,
} from './actions';
import {Player} from '../models/playersModels';

function* getPlayersEffect() {
  try {
    const playersFetched = yield call(fetchPlayers);
    const playersList = playersFetched.players
      .map((player: Player) => new Player(player))
      .sort((a: Player, b: Player) => {
        return a.data.rank > b.data.rank ? 1 : -1;
      });
    yield put(getPlayersListSuccess(playersList));
  } catch (e) {
    yield put(getPlayersListFailure());
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_PLAYERS_REQUEST, getPlayersEffect);
}
