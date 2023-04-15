//Task 1

let randomFromZeroToOne = Math.floor(Math.random() * 11);
function checkMoreLess(num) {
    if(randomFromZeroToOne < num) {
        return "My number is greater than a randomly generated number!";
    } else if(randomFromZeroToOne > num) {
        return "Randomly generated number is more than my number!";
    } else if(randomFromZeroToOne === num) {
        return "Randomly generated number equals my number!";
    }
}

console.log(checkMoreLess(6));
console.log(randomFromZeroToOne);

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

checkBirthday(16, 3);
checkBirthday(12, 11);


