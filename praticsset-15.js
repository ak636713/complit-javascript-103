// chapter 4 - practice set

//p1

// let str="code/'s"
// console.log(str)


// // p2 - p4
// const sentence = 'The quick brown fox jumped over the lazy dog'
// const word = 'fox'
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `)
// console.log(sentence.includes(word))

// console.log(word.toUpperCase())
// console.log(word.toLowerCase())

// // p3
// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.startsWith('cats'));
// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question?'));
// // Expected output: false

let str3 ="Please Give Rs 1000"
let amount = Number.parseInt(str3.slice("Please Give Rs".length))
console.log(amount)
console.log(typeof amount)

// p5
let friend = "deepk"
friend[2] = "r" //friend is not change because string is imutable
console.log(friend)
