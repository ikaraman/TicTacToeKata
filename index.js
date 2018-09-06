"use strict";

const commandLineArgs = require("command-line-args"),
    startingOptions = require("./src/startingOptions");

try {
    const options = commandLineArgs(startingOptions.getStartingOptions());
    startingOptions.startGameIfCommandLineOptionsAreValid(options);
}
catch(error) {
    console.log("There was an error processing your input.\nPlease check your command line options and try again.");
}
