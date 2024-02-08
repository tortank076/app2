var pacman = document.getElementById("touch");

var hammertime = new Hammer(document.body, {});
var ofLeft = touch.offsetLeft;
var ofTop = touch.offsetTop;
hammertime.on('pan pinch', function (event) {
    console.dir(touch.offsetLeft);
    pacman.style.left = touch.offsetLeft + "px";
    let distance = event.distance;
    let additionalEvent = event.additionalEvent;
    console.log(additionalEvent, distance);
    // "panright" "panleft" "panup" "pandown"
    switch (additionalEvent) {
        case "panright":
            ofLeft = (distance + ofLeft)/2;
            pacman.style.left = ofLeft + "px";
            break;
        case "panleft":
            ofLeft = (ofLeft - distance)/2;
            pacman.style.left = ofLeft + "px";
            break;
        case "panup":
            pacman.style.transform = "translateY(-" + distance + "px)";
            break;
        case "pandown":
            pacman.style.transform = "translateY(" + distance + "px)";
            break;
        default:
            break;
    }
});pacman