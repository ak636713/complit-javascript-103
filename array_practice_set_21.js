//chapter one practice set 
// p 1

// let arr = [1, 2, 3, 4, 55]
// let a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)

// console.log(arr)


// p 2

// let arr = [1, 2, 3, 4, 55]
// do{
//     let a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)

// console.log(arr)

// } while (a != 0)



// p 3

// let arr = [1, 2, 3, 4, 55, 584, 354, 214, 852, 998]
// let n= arr.filter((x)=>{
//     return x%10 == 0
// })
// console.log(n)



// p 4

// let arr = [1, 2, 3, 4, 55, 584, 354, 214, 852, 998]
// let n = arr.map((x)=>{
//     return x*x
// })
// console.log(n)




// p 5

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n= arr.reduce((x1,x2)=>{
    return x1 * x2
})
console.log(n)
