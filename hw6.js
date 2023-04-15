//Task 1

function checkMoreLess(num) {
    if(Math.random() < num) {
        return "My number is greater than a randomly generated number!";
    } else if(Math.random() > num) {
        return "Randomly generated number is more than my number!";
    } else if(Math.random() === num) {
        return "Randomly generated number equals my number!";
    }
}

console.log(checkMoreLess(0.6));



//Tas 2

const date = new Date();
const day = date.getDate();
const month = date.getMonth();

function checkBirthday(bDay, bMonth) {
    if(bDay === day & bMonth === month) {
        console.log("Happy Birthday!");
    } else {
        console.log("This is not your Birthday!");
    }
}

checkBirthday(15, 3);
checkBirthday(12, 11);


