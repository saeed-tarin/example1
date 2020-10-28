"use strict";
exports.__esModule = true;
var changeBorderStyle_1 = require("./changeBorderStyle");
var errorFunction_1 = require("./errorFunction");
var printInformation_1 = require("./printInformation");
var checkEmptyBox_1 = require("./checkEmptyBox");
var checkPatternNameAndFamilly_1 = require("./checkPatternNameAndFamilly");
var checkPatternEmail_1 = require("./checkPatternEmail");
function isValidate(e) {
    e.preventDefault();
    changeBorderStyle_1["default"]();
    var tempInformation = document.getElementById("formElements").elements;
    var message;
    message = document.getElementById("msg1");
    message.innerHTML = "";
    try {
        if (checkEmptyBox_1["default"](tempInformation))
            throw errorFunction_1["default"](0);
        if (checkPatternNameAndFamilly_1["default"](tempInformation[0].value))
            throw errorFunction_1["default"](1);
        if (checkPatternNameAndFamilly_1["default"](tempInformation[1].value))
            throw errorFunction_1["default"](2);
        if (checkPatternEmail_1["default"](tempInformation[2].value))
            throw errorFunction_1["default"](3);
        if (tempInformation[3].value != tempInformation[4].value)
            throw errorFunction_1["default"](4);
    }
    catch (err) {
        return false;
    }
    message.innerHTML = "اطلاعات شما با موفقیت ارسال شد";
    printInformation_1["default"](tempInformation);
}
module.exports = isValidate;
