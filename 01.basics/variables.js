const accountId = 122235
let accountEmail = "kalyan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
// If any variable is not intialised with any value it will be 
// considered as undefined
// accountId = 1 TypeError: Assignment to constant variable.
// prefer only let but not var to declare variables,
// because of issue in block scope and functional scopes

console.log(accountId)
accountEmail = "sathwik@google.com"
accountPassword = "677890"
accountCity = "Kolkata"
// this creates a tabular structure with given values as rows.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])