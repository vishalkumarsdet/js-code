let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/* conversion
    "33" => 33
    "33abc" => NaN
    true => 1; false =>0
    null => 0; undefined => NaN
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* boolean conversion
    1 => true; 0 => false
    "" => false
    "vishal" => true
*/

// String conversion

let someRandomNumber = 44

let stringNumber = String(someRandomNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ****************************************** Operations *****************************************

let value = 3

let negValue = -value

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "vishal"
let str2 = "kumar"
let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
