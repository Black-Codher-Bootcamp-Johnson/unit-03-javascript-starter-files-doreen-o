// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
let b = 10;
const c = a + b;

console.log(c);

function sayHey() {
    console.log("Hey!");
}
sayHey();

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation();

function futureAge(x,y) {
    console.log(x)
    console.log(y)
    const answer = x + 5;
    console.log(y + " Your age in 5 years time will be..." + answer)
    return y + " Your age in 5 years time will be.." + answer;
}

futureAge(22, "Mary")

