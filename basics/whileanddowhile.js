// While loop

let index = 0;

while(index<10)
{
    console.log(`Index value is: ${index}`);
    index = index+3
}

let myArr = ["one", "two", "three"]
let arr = 0
while(arr<myArr.length){
    console.log(`Array Index value is: ${arr}`);
    console.log(`Array value is: ${myArr[arr]}`);
    arr = arr+1
}

// Do While loop --> once execution will happen then condition will check

// let score = 11 //Expected result it should print Score is: 11
let score = 1 
do{
    console.log(`Score is: ${score}`);
    score++;
} while(score<10);