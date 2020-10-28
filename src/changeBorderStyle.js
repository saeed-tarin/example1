function changeBorderStyle() {
    var tempInformation = document.getElementById("formElements");
    for (var i = 0; i < tempInformation.length - 1; i++) {
        if (!tempInformation[i].value) {
            tempInformation[i].className = "mystyle";
        }
        else {
            tempInformation[i].className = "previousstyle";
        }
    }
}
module.exports = changeBorderStyle;
