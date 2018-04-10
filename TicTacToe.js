"use strict";

///////////////////////////
const parameters = {
    "fieldSize": 3
};
ticTacToe(parameters);
///////////////////////////


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