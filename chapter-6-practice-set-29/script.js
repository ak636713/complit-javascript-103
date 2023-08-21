
let runAgin = true
const canDrive = (age) => {
    return age > 18 ? true : false
}

while (runAgin) {
    let age = prompt("Enter your age:")
    age = parseInt(age)

    if(age<0){
        console.error("Please enter a valid age")
        break;
    }

    if (canDrive(age)) {
        alert("yes you can drive")
    }
    else {
        alert("no you can notn drive")
    }
    runAging = confirm("do you want to run aging")
}