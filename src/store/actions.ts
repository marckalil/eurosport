import {Player} from '../models/playersModels';

export const GET_PLAYERS_REQUEST = 'GET_PLAYERS_REQUEST';
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';

export type IActions = {
  type: string;
  players: Player[];
};

export const getPlayersList = (): IActions => ({
  type: GET_PLAYERS_REQUEST,
  players: [],
});
export const getPlayersListSuccess = (players: Player[]): IActions => ({
  type: GET_PLAYERS_SUCCESS,
  players,
});
export const getPlayersListFailure = (): IActions => ({
  type: GET_PLAYERS_FAILURE,
  players: [],
});
