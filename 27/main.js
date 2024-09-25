"use strict";
function alien_color(color) {
    if (color === "green") {
        console.log("The player has earned 5 points.");
    }
    else if (color === "yellow") {
        console.log("The player has earned 10 points.");
    }
    else if (color === "red") {
        console.log("The player has earned 15 points.");
    }
    else {
        console.log("The player earned no point.");
    }
}
alien_color("green");
alien_color("yellow");
alien_color("red");
