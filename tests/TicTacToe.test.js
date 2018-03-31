"use strict";

const game = require("ticTacToe");

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
            {"coordX":1,"coordY":1,"cellState":"."},
            {"coordX":1,"coordY":2,"cellState":"."},
            {"coordX":1,"coordY":3,"cellState":"."},
            {"coordX":2,"coordY":1,"cellState":"."},
            {"coordX":2,"coordY":2,"cellState":"."},
            {"coordX":2,"coordY":3,"cellState":"."},
            {"coordX":3,"coordY":1,"cellState":"."},
            {"coordX":3,"coordY":2,"cellState":"."},
            {"coordX":3,"coordY":3,"cellState":"."}
        ];

        expect(game.createGameField(parameters)).toEqual(expectedField);
    });
});


describe("isThereAWinner() function", () => {
    it("should return false", () => {

    });
});


describe("isTurnAvailable() function", () => {
    it("should ...", () => {

    });
});


describe("drawTheField() function", () => {
    it("should ...", () => {

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