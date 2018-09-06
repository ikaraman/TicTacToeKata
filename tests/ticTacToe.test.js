"use strict";

const game = require("../src/ticTacToe");

console.log = jest.fn(function() {
});

describe("ticTacToe() main function", () => {
    it("should stop execution when game parameters are invalid", () => {
        expect(game.ticTacToe("sdfd")).toBe(false);
    });

    it("should return true when called with valid game parameters", () => {
        const parameters = {
            "fieldSize": 3
        };

        expect(game.ticTacToe(parameters)).toBe(true);
    });
});


describe("areGameParametersValid() function", () => {
    it("should return true when called " +
        "with a parameters object" +
        "with a valid field size key", () => {

        let parameters = {
            "fieldSize": 3
        };

        expect(game.areGameParametersValid(parameters)).toBe(true);
    });

    it("should return false when called without a parameters object", () => {
        expect(game.areGameParametersValid()).toBe(false);
    });

    it("should return false when called with a wrong field size in a parameters object (!= 3)", () => {
        let parameters = {
            "fieldSize": 2
        };

        expect(game.areGameParametersValid(parameters)).toBe(false);
    });


    it("should return false when called with a incorrect data type in a parameters object (string '3')", () => {
        let parameters = {
            "fieldSize": "3"
        };

        expect(game.areGameParametersValid(parameters)).toBe(false);
    });


    it("should return false when called with a wrong field size in a parameters object (null)", () => {
        let parameters = {
            "fieldSize": null
        };

        expect(game.areGameParametersValid(parameters)).toBe(false);
    });


    it("should return false when called with a wrong field size in a parameters object (boolean)", () => {
        const parameters = {
            "fieldSize": true
        };

        expect(game.areGameParametersValid(parameters)).toBe(false);
    });
});


describe("createGameField() function", () => {
    it("should return true when called ", () => {
        const parameters = {
            "fieldSize": 3
        };

        const expectedField = [
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ];

        expect(game.createGameField(parameters)).toEqual(expectedField);
    });
});


describe("isThereAWinner() function", () => {
    it("should return false", () => {

    });
});


describe("isTurnAvailable() function", () => {
    it("should return false for a field full of x&o's (no '.')", () => {
        const field = [
            ["x", "x", "x"],
            ["o", "x", "x"],
            ["o", "o", "o"]
        ];

        expect(game.isTurnAvailable(field)).toEqual(false);
    });

    it("should return true for a freshly created field (only '.')", () => {
        const field = [
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ];

        expect(game.isTurnAvailable(field)).toEqual(true);

    });

    it("should return true for a field with only one '.' in the last position", () => {
        const field = [
            ["x", "x", "x"],
            ["o", "x", "x"],
            ["o", "o", "."]
        ];

        expect(game.isTurnAvailable(field)).toEqual(true);
    });

    it("should return true for a field with only one '.' in the first position", () => {
        const field = [
            [".", "x", "x"],
            ["o", "x", "x"],
            ["o", "o", "o"]
        ];

        expect(game.isTurnAvailable(field)).toEqual(true);
    });
});


describe("drawTheField() function ", () => {
    it("should output the field by stdouting each cell value and console.logging to cater for a new line", () => {
        const parameters = {
            "fieldSize": 3
        };

        const field = [
            [".", ".", "."],
            [".", ".", "."],
            [".", ".", "."]
        ];

        console.log = jest.fn(function() {
        });

        process.stdout.write = jest.fn(function() {
        });

        game.drawTheField(field, parameters);
        expect(process.stdout.write).toHaveBeenCalledTimes((parameters.fieldSize * parameters.fieldSize) + parameters.fieldSize);
    });
});


describe("makeNewTurn() function", () => {
    it("should ...", () => {

    });
});





describe("...() function", () => {
    it("should ...", () => {

    });
});


describe("...() function", () => {
    it("should ...", () => {

    });
});