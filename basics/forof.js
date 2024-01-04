// for of - genrally used for array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Wrold"
for (const greet of greetings) {
    // console.log(`Char of gretting ${greet}`);
}

// Map

const map = new Map()
map.set('IN', "Inida")
map.set('USA', "United State of America")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': "Nfs",
    'game2': "Eacricket"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }