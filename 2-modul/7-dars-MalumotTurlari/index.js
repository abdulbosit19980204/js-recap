// ma'lumot turlari ikkil ular primitive va object

// primitive -*{ Boolean, Null, Undefined, Number, String, Symbol }

// Object - *{ Array , Object, Function, RegEx, Date }

// Number 
let number = 5.6 // Data Type Numbe. number type = keyin qiymat ozi berilib ketiladi

// Infinity number ichidagi qiymat bu miso uchun biror sonni 0 ga bolganimizda yuzaga keladi
// bu cheksizlikni anglatadi

console.log(8 / 0); // infinity
console.log(-8 / 0); //minus Infinity

// NaN ikki xil malumotni oz xolatida birgalikda amal bajirlsa
console.log("string" * 5); //NaN qaytaradi

// String
const clientName = "string Type" //String ni elon qilish uchun ' yoki " nu lekin bazan `(bac) ni ham ishlatiladi

// Boolen  true\false

const isMarried = false
const isCircleEarth = true

// Undefined vs Null

//Agar e'lon qilinmagan ozgaruvchini chaqirilsa Null qiymat qaytaradi
console.log(clientAge); //ReferenceError: clientAge is not defined = null
// NULL xechnarsa yoq

//undefined
//agar ozgaruvchi e'loq qilingan lekin qiymat ebrilmagan bolsaa undefined error beriladi
let und;
console.log(und);


// object types

//Object
const thief = {
        // key: value
        age: 30, //number
        jacket: "black", //string
        isLong: false //boolean
    }
    // quydagi uch xolatda foydalanishimiz mumkin
console.log(thief);
console.log(thief.age);
console.log(thief["age"]);

// Array -yoki  massive [] bilan e'lon qilinadi
// key            0      1          2     3   4   5
const colors = ['red', 'black', 'green', [], {}, 19]
console.log(colors[1]); //shu xolatda ishlatiladi