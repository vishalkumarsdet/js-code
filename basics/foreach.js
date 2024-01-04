const coding = ["js", "cpp", "py", "java", "ruby"]

coding.forEach(  function (value) {
    // console.log(value);
})

coding.forEach( (item) => {
    // console.log(item);
})

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding  = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageFileName);
    console.log(item.languageName);
} )