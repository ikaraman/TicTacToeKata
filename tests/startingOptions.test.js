"use strict";

const startingOptions = require("../src/startingOptions");

describe("getStartingOptions() function", () => {
    it("should return array with help & fieldSize objects", () => {
        const expectedOption = [
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

        return expect(startingOptions.getStartingOptions()).toEqual(expectedOption)
    });
});