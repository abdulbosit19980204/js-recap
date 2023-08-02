"use strict"

// Operatorlar
// + operatori
console.log("Abdulbosit" + "Tuychiev");

// stringdi intga otkazish
console.log("Men " + (+"20" + +"5") + " yoshdaman");

//incrament and decrement

let incr = 10
let decr = 10

incr++
decr--
incr++
decr--
incr++
decr--

console.log(incr);
console.log(decr);

++incr
--decr

console.log(incr);
console.log(decr);


// % operatori bolgandan qoldiqni hisoblab beradi 

console.log(10 % 3);

// tenglikni tekshirish ==

console.log(5 * 5 == 25); //true

// === vs ==
// bular asosan kelgan qiymatni tipini ham solishtiradi
console.log(5 * 5 == 25); //true
console.log(5 * 5 === "25"); //false chunki bunda ikkinchi ma'lumot string tipida turibdi

// && => va   || => yoki  ! => inkor

const isAge = false
const isClose = true

console.log(isAge && isClose); //false agar ikkovi qiymat ham bir xil qiymat bolsa true qaytaradi
console.log(!(isAge && isClose)); //true qaytarilgan qiymatni teskarisini qaytaradi
console.log(isAge || isClose); //true agar ikko vi qiymatdan biri ture bolsa ture qaytaradi