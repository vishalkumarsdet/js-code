// singleton  =>  when we create an object from constructor then it is called singleton. Else all are non singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "vishal",
    "full name": "vishal kumar",
    //mySym: "mykey1", // worng syntax
    [mySym]: "mykey2", // right syntax
    age: "18",
    location: "Bihar",
    email: "vishal@vishal.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "vishal@google.com"
//Object.freeze(jsUser)
jsUser.email = "vishal@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting()); // in running console error will come due to object freezed

jsUser.greetingTwo = function(){
    console.log(`js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());