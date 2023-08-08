"use strict"
//length proporties
const user = "Abdulbosit"

console.log(user.length);

const arr = ["red", "blue", "black", 1, 2, 3]

console.log(arr.length);

console.log(user[3]);
console.log(arr[3]);

//bu xoldagi qiymat berishni qabul qilmaydi yani userga saqlamaydi
// console.log(user[2] = "5");
// console.log(user);

// methods
console.log(user.toUpperCase());
console.log(user.toLowerCase());

const greeting = "Hello world";
console.log(greeting.indexOf("w"));
console.log(greeting.indexOf("p")); //-1: false

console.log(greeting.slice(6, greeting.lastIndexOf()));


const num = 8.3
console.log(Math.round(num));

const borderWidth = "15.6px"
console.log(parseInt(borderWidth));
console.log(parseFloat(borderWidth));