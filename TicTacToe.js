"use strict";

///////////////////////////
const parameters = {
    "fieldSize": 3
};
ticTacToe(parameters);
///////////////////////////


function ticTacToe(parameters) {
    if(!validateGameParameters(parameters)){
        return false;
    }
    const gameField = createGameField(parameters);

    // while (!isGameFinished(gameField)){
        //drawTheField(gameField)
        //makeNewTurn(gameField)
    // }

    return true;
}

function validateGameParameters(parameters) {
    if (parameters === undefined || parameters.fieldSize !== 3) {
        console.log("Game parameters are incorrect, exiting...");
        return false;
    }

    console.log("Game parameters are correct, let the game begin!");
    return true;
}

function createGameField(parameters) {
    const gameField = [];

    for (let x = 1; x <= parameters.fieldSize; x++){
        for (let y = 1; y <= parameters.fieldSize; y++){
            gameField.push(
                {
                    "coordX": x,
                    "coordY": y,
                    "cellState": "."
                });
        }
    }

    return gameField;
}

module.exports = {
    ticTacToe: ticTacToe,
    validateGameParameters: validateGameParameters,
    createGameField: createGameField
};