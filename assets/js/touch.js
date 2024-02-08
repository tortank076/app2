var pacman = document.getElementById("touch");
var hammertime = new Hammer(document.body, {});

hammertime.on('pan pinch', function (event) {
    
    let distance = event.distance;
    let additionalEvent = event.additionalEvent;
    console.log(additionalEvent, distance);
    // "panright" "panleft" "panup" "pandown"
    switch (additionalEvent) {
        case "panright":
            pacman.style.transform = "translateX(" + distance + "px)";
            break;
        case "panleft":
            pacman.style.transform = "translateX(-" + distance + "px)";
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
});