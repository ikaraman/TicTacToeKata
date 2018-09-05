"use strict";

const game = require("./ticTacToe"),
    gameParameters = { "fieldSize": undefined };

exports.startGameIfCommandLineOptionsAreValid = function(options) {
    if (options.fieldSize === undefined || !(Number.isInteger(options.fieldSize)) ) {
        console.log("To start a game, you need to specify a field size. Sample usage: \n'npm install' \n'node index.js -s 3'");
    } else {
        gameParameters.fieldSize = options.fieldSize;
        game.ticTacToe(gameParameters);
    }
};


exports.getStartingOptions = function() {
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
};
