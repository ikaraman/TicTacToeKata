"use strict";

const game = require("ticTacToe");

describe("TicTacToe", () => {
    it("should return true when called with a parameters object", () => {
        let parameters = {
            "fieldSize": 3
        };

        expect(game.ticTacToe(parameters)).toBe(true);
    });

    it("should return false when called WITHOUT a parameters object", () => {
        expect(game.ticTacToe()).toBe(false);
    });

    it("should return false when called with a wrong field size in a parameters object", () => {
        let parameters = {
            "fieldSize": 2
        };

        expect(game.ticTacToe(parameters)).toBe(false);
    });
});