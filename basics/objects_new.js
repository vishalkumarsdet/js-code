
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "test@google.com",
    fullname: {
        userfullname:{
            firstname: "vishal",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname); // if fullname avaialbe then print else not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [ 
    {
        id: "1234",
        email: "test@google.com"
    }
]

//users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));