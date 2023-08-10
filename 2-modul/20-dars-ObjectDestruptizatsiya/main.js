"use strict"
const theif = {
    jacket: "black",
    height: "1.7 m",
    colors: {
        hair: "gray",
        style: "curley",
    },
    howOut: function() {
        console.log("by the door");
    },
}

theif.howOut()

console.log(theif);
delete theif.jacket
console.log(theif);

console.log(Object.keys(theif));
console.log(Object.keys(theif).length);

for (let key in theif) {
    if (typeof theif[key] === "object") {
        for (let i in theif[key]) {
            console.log(`${i}=> ${theif[key][i]}`);
        }
    } else {
        console.log(`${key}=> ${theif[key]}`);
    }
    console.log(key);

}

// Destruptizatsiya
const { hair, style } = theif.colors
console.log(hair, style);