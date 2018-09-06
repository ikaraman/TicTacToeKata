"use strict";

const game = require("./ticTacToe"),
    gameParameters = { "fieldSize": undefined };

function startGameIfCommandLineOptionsAreValid(options) {
    if (options.fieldSize === undefined || !(Number.isInteger(options.fieldSize)) ) {
        console.log("To start a game, you need to specify a field size. Sample usage: \n'npm install' \n'node index.js -s 3'");
    } else {
        if (options.fieldSize === 3) {
            gameParameters.fieldSize = options.fieldSize;
            console.log("Game parameters are correct, let the game begin!");
            game.ticTacToe(gameParameters);
        } else {
            console.log("Game parameters are incorrect, exiting...");
        }
    }
}

function getStartingOptions() {
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

module.exports = {
    getStartingOptions: getStartingOptions,
    startGameIfCommandLineOptionsAreValid: startGameIfCommandLineOptionsAreValid
};