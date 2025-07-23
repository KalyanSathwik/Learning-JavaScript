let score = "33"

console.log(typeof(score))
console.log(typeof score)

// line 3 and 4 shows we can write it as normally, as a method
// Both of them works same.

// assuming we got the value in form of string, now I want to 
// do the operation in numbers then\

let valueInNumber = Number(score) // we have to write in Capital despite we got the result in small letters
console.log(typeof valueInNumber)

// what if
score = "33abc"
valueInNumber = Number(score) // we have to write in Capital despite we got the result in small letters
console.log(typeof valueInNumber) // how did this give number as type??
console.log(valueInNumber) // gives us NaN => Not a Number
// 33abc is not a number, so this is how we can check whether a value in number of NaN
// so we can't solely rely on types, we must be cautious

score = null
console.log(score)
console.log(typeof score)

score = undefined
console.log(score)
console.log(typeof score)

score = Number('kalyan')
console.log(score)
console.log(typeof score)

// from these examples we can see, conversion of:
// 33 => 33
// "33abc" => NaN
//  true = 1, false = 0


// boolean conversion of:
// 1 => true 0 => false
// "" => false "kalyan" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)