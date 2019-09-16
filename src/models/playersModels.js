"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(player) {
        this.firstname = player.firstname || '';
        this.lastname = player.lastname || '';
        this.shortname = player.shortname || '';
        this.sex = player.sex || '';
        this.country = {
            picture: player.country.picture || '',
            code: player.country.code || '',
        };
        this.picture = player.picture || '';
        this.data = {
            rank: player.data.rank || 0,
            points: player.data.points || 0,
            weight: player.data.weight / 1000 || 0,
            height: player.data.height || 0,
            age: player.data.age || 0,
            last: player.data.last || [],
        };
    }
    Player.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    Player.prototype.getCountryUrl = function () {
        return this.country.picture;
    };
    Player.prototype.getPictureUrl = function () {
        return this.picture;
    };
    Player.prototype.getWinsLosses = function () {
        var wins = 0;
        var losses = 0;
        this.data.last.forEach(function (score) {
            if (score > 0)
                wins += 1;
            else
                losses += 1;
        });
        return { wins: wins, losses: losses };
    };
    return Player;
}());
exports.Player = Player;
