"use strict";

function ticTacToe(parameters) {
    if (parameters === undefined || parameters.fieldSize !== 3) {
        return false;
    }

    console.log("Let the game begin!");

    return true;
}



module.exports = {
    ticTacToe: ticTacToe
};