"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    players: [],
    loading: false,
    error: false,
};
function playersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.GET_PLAYERS_REQUEST:
            return __assign(__assign({}, state), { loading: true, error: false });
        case actions_1.GET_PLAYERS_SUCCESS:
            return { players: action.players, loading: false, error: false };
        case actions_1.GET_PLAYERS_FAILURE:
            return { players: [], loading: false, error: true };
        default:
            return state;
    }
}
exports.default = playersReducer;
