console.log("log!"); //this will print the message

console.info("info !"); //this will print the info message 

console.warn("warning!"); //this will print the warning message

console.error("error!"); //this will print the error message

console.assert("asserst!" !=false); //this will print false
console.assert("asserst!" ==false); //this will print true

let obj = {a:1, b:2, c:3, d:4, e:5}
console.table(obj); // this was as the table format

console.table(console); // this was print console method as the table format

console.time("a")


console.timeEnd("a")

console.time("p1")
console.timeEnd("p1")


console.time("forLop")
for (let i = 0; i <5; i++) {
    console.log(233)
}
console.timeEnd("forLop")