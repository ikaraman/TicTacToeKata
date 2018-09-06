"use strict";

const field = require("./field");
const readline = require("readline-sync");

function ticTacToe(parameters) {
    const gameField = field.createGameField(parameters);

    while (!isThereAWinner(gameField) && field.isTurnAvailable(gameField)){
        makeNewTurn(gameField);
    }
}

function isThereAWinner(gameField) {
    //to do:
    //check horizontal lines
    //check vertical lines
    //check diagonals

    //meanwhile just
    return false;
}

function makeNewTurn(gameField) {
    field.drawTheField(gameField);
    const turnCoordinates = readline.question("Your turn! Please enter 2 digits 'row column'\nExample to play in the middle of the 3x3 field: 2 2\n");
    field.updateTheField(gameField, turnCoordinates.split(" "));
}

module.exports = {
    ticTacToe: ticTacToe,
};