function checkEmptyBox(tempInformation) {
    for (var i = 0; i < tempInformation.length - 1; i++) {
        if (!tempInformation[i].value)
            return true;
    }
    return false;
}
module.exports = checkEmptyBox;
