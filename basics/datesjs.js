// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
let myCreateDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDate.toLocaleString());

let myCreateDate1 = new Date("01-14-2023")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate1.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

let mynewDate = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(mynewDate);