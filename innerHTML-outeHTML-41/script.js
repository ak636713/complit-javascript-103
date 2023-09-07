document.write(document.body.firstElementChild.nodeName)

// console.write(document.getElementsByTagName("span")[0])

document.write(document.body.firstChild.nodeName)


document.write(document.body.firstChild.data)


let a = first.innerHTML = "<i> hey i am a tag </i>" //valid for only element tags
let b = first.outerHTML = "<div> hey </div>" //valid for only element tags



console.log(a,b)

console.log(document.body.textContent) 