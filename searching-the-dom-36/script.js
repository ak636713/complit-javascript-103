// change the card title to red
let ctitle = document.getElementById("second-card")

ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "purple"
ctitles[2].style.color = "green"

console.log(ctitles)

console.log(document.getElementsByTagName("a"))