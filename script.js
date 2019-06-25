function changeColor() {
    // Uses RGB colors
    var color = "rgb(";

    for (var i = 0; i < 3; i++) {
        color += randomNumber(0, 255);
        if (i !== 2) {
            color += ","
        }
    }
    document.getElementById("target").style.color = color;
}

var randomNumber = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}