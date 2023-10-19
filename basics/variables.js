const accountId = 144345
let accountEmail = "vishal@test.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState

// accountId = 2 // Not allowed

/*
Prefer not use var
because of issue in block scope and functional scope
*/

accountEmail = "test@abc.com"
accountPassword = "23445"
accountCity = "Bihar"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])