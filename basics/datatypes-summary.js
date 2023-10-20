// primitive -> call by value
//7 types : string, Number, Boolean, null, undefinded, Symbol, BigInt

// JavaScript is a dynamically typed language

const Id = Symbol('123')
const anotherId = Symbol('123')
const outsideTemp = null

console.log(Id === anotherId);

// Reference type ->  Non primitive -> dataType is function or function ko objectFunction bola jata hai

// Array, Objects, Functions

 const heros = ["shaktiman", "naagraj", "doga"]

 // object

 let myObj = {
    name: "vishal",
    age: 22,
 }

 // Funcation

 const myFunction = function(){
    console.log("Hello World");
 }

 console.log(typeof null);
 console.log(typeof myFunction);

 // https://262.ecma-international.org/5.1/#sec-11.4.3

 /* ================================ Memory ====================================== */

 // Stack (Primitive) -> a copy of original value, Heap (Non-Primitive) -> original value ref

 let myName = "javascriptcodingpractice"

 let anotherName = myName
 anotherName = "javascriptcode"

 console.log(anotherName);
 console.log(myName);

 let userOne = {
    email: "abc@test.com",
    upi: "upi@123",
 }

 let userTwo = userOne

 userTwo.email = "test@abc.com"

 console.log(userOne.email);
 console.log(userTwo.email);