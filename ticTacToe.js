"use strict";

function ticTacToe(parameters) {
    if( !areGameParametersValid(parameters) ){
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
    //hardcoded field size, need to refactor
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
    for (const row of gameField) {
        for (const cell of row) {
            if (cell === ".") {
                return true;
            }
        }
    }

    return false;
}

function drawTheField(gameField) {
    for( const row of gameField ){
        for( const cell of row ){
            process.stdout.write(cell);
        }
        process.stdout.write("\n");
    };
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