"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var players_json_1 = __importDefault(require("./players.json"));
function fetchPlayers() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(players_json_1.default);
        }, 500);
    });
}
exports.default = fetchPlayers;
