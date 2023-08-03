"use strict"

const age = +prompt("How old are you", "")

if (age > 18) {
    console.log("Welocome");
} else {
    console.log("you must be old than 18");
}


if (age > 25) { console.log("All films"); } else if (age > 18 && age < 25) { console.log("+18"); } else { console.log("Childish films"); }

// tenry operators 
(age > 30) ? console.log("+30"): console.log("age<30");

const color = "green"

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("run");
        break;

    default:
        console.log("There is not electracity");
} // switch case === shu tartibda tekshiradi