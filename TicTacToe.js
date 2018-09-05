"use strict";

const commandLineArgs = require("command-line-args");
const options = commandLineArgs(getStartOptions());
const parameters = {
    "fieldSize": undefined
};

if (options.fieldSize === undefined || options.fieldSize % 1 !== 0) {
    console.log("To start a game, you need to specify a field size. Sample usage: \n'npm install' \n'node TitTacToe.js -s 3'");
} else {
    parameters.fieldSize = options.fieldSize;
    ticTacToe(parameters);
function getStartOptions() {
    return [
        {
            name: 'help',
            alias: 'h',
            type: Boolean,
            description: 'Help'
        },
        {
            name: 'fieldSize',
            alias: 's',
            type: Number,
            description: 'Game field size',
        }
    ];
}


function ticTacToe(parameters) {
    if(!areGameParametersValid(parameters)){
        return false;
    }
    const gameField = createGameField(parameters);

    // while (!isThereAWinner(gameField) && isTurnAvailable(gameField)){
    drawTheField(gameField, parameters);
    //     makeNewTurn(gameField);
    // }

    return true;
}

function areGameParametersValid(parameters) {
    if (parameters === undefined || parameters.fieldSize !== 3) {
        console.log("Game parameters are incorrect, exiting...");
        return false;
    }

    console.log("Game parameters are correct, let the game begin!");
    return true;
}

function createGameField(parameters) {
    const gameField = [];

    for (let row = 0; row < parameters.fieldSize; row++){
        gameField.push([]);
        for (let column = 0; column < parameters.fieldSize; column++){
            gameField[row].push(".")
        }
    }

    return gameField;
}

function isThereAWinner(gameField) {
    //to do:
    //check horizontal lines
    //check vertical lines
    //check diagonals

    //meanwhile just
    return false;
}

function isTurnAvailable(gameField) {
    for (let i = 0; i < gameField.length; i++) {
        if (gameField[i].cellState === ".") {
            return true
        }
    }

    return false;
}

function drawTheField(gameField, parameters) {
    //bad code, need to refactor
    for( let i = 1; i <= parameters.fieldSize; i++ ){
        for( let j = 1; j <= parameters.fieldSize; j++ ){
            process.stdout.write(gameField[i*j - 1].cellState);
        }
        console.log("");
    }
}

function makeNewTurn(gameField) {
    //wait for input from a player
    //drawTheField()
}

module.exports = {
    ticTacToe: ticTacToe,
    areGameParametersValid: areGameParametersValid,
    createGameField: createGameField,
    isTurnAvailable: isTurnAvailable,
    drawTheField: drawTheField
};