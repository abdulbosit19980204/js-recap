"use strict"

const arr = [1, 11, 3, 4, 5, 6]

// oxirgi elementini ochirish 
arr.pop()
console.log(arr);

// oxiriga element qoshish
arr.push(7)
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let val of arr) {
    console.log(val);
}

// forEach methods
// arr.forEach(function(item, index, arr) { console.log(`${index}, ${item}, ${arr}`); })

// const movies = prompt("What is your favourite movies", "");
// const userMovies = movies.split(', ')
// console.log(userMovies);

// const userJoinedMovies = userMovies.join(" - ")
// console.log(userJoinedMovies);

// arr.sort((a, b) => a - b)
arr.sort(compareFn)
console.log(arr);

function compareFn(a, b) {
    return a - b
}