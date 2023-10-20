const name = "vishal"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and repo count is ${repoCount}`); //called string interpolation

const gameName = new String('Vishal-kr-ya')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newStirng = gameName.substring(0,4) // we can't give -ve even we give -ve value it will start from 0 index
console.log(newStirng);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStirngOne = "  vishal  "
console.log(newStirngOne);
console.log(newStirngOne.trim());

const url = "https://vishal.com/vishal%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('vishal'));

console.log(gameName.split('-'));