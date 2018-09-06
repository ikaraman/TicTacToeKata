"use strict";

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
    }
}

function updateTheField(gameField, coordinates = []) {
    gameField[coordinates[0] - 1][coordinates[1] - 1] = "X";
}


module.exports = {
    createGameField: createGameField,
    isTurnAvailable: isTurnAvailable,
    drawTheField: drawTheField,
    updateTheField: updateTheField
};