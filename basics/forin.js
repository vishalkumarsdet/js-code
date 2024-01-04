//forin for object genrally used
const myObject = {
    js: "javaScript",
    cpp: "c++",
    rb: "rubby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is the shortname of ${myObject[key]}`);
}

const programming  = ["js", "java", "ts", "py", "cpp"]

for (const key in programming) {
        console.log(programming[key]);
}