"use strict";
exports.__esModule = true;
var functionMessage_1 = require("./functionMessage");
function printInformation(Inf) {
    for (var i = 0; i < Inf.length; i++) {
        if (Inf[i].value)
            console.log(functionMessage_1["default"](i) + Inf[i].value);
    }
}
module.exports = printInformation;
