"use strict"

const channel = prompt("What is your favourite youtuber");

console.log("https://youtube.com/" + channel);
// interpolatsiya `` bilan ishlatiladi `${var}` shu shakilda

console.log(`https://youtube.com/${channel}`);

const user = "Abdulbosit"
const job = "Developer"
console.log(`I am ${user}, My job is ${job}`);