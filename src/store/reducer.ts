import {Player} from '../models/playersModels';
import {
  GET_PLAYERS_REQUEST,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
  IActions,
} from './actions';

export type IPlayersReducerState = {
  players: Player[];
  loading: boolean;
  error: boolean;
};

const initialState = {
  players: [],
  loading: false,
  error: false,
};

function playersReducer(
  state: IPlayersReducerState = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_PLAYERS_REQUEST:
      return {...state, loading: true, error: false};
    case GET_PLAYERS_SUCCESS:
      return {players: action.players, loading: false, error: false};
    case GET_PLAYERS_FAILURE:
      return {players: [], loading: false, error: true};
    default:
      return state;
  }
}

export default playersReducer;
