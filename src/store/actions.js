"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PLAYERS_REQUEST = 'GET_PLAYERS_REQUEST';
exports.GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
exports.GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
exports.getPlayersList = function () { return ({
    type: exports.GET_PLAYERS_REQUEST,
    players: [],
}); };
exports.getPlayersListSuccess = function (players) { return ({
    type: exports.GET_PLAYERS_SUCCESS,
    players: players,
}); };
exports.getPlayersListFailure = function () { return ({
    type: exports.GET_PLAYERS_FAILURE,
    players: [],
}); };
