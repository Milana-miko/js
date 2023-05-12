//Task 1


function checkMoreLess(num) {
    const randomFromZeroToOne = Math.floor(Math.random() * 11); //0-10 neraryal
    if(randomFromZeroToOne < num) {
        return "My number is greater than a randomly generated number! Generated number is " + randomFromZeroToOne;
    } else if(randomFromZeroToOne > num) {
        return "Randomly generated number is " + randomFromZeroToOne + " It's more than my number!";
    } else {
        return "Randomly generated number is " + randomFromZeroToOne + " And it's equals my number!";
    }
}

console.log(checkMoreLess(6));


//Tas 2

const date = new Date(); // 16.4.2023 
const day = date.getDate(); //16
const month = date.getMonth(); //4

function checkBirthday(bDay, bMonth) {
    if(bDay === day & bMonth === month) {
        console.log("Happy Birthday!");
    } else {
        console.log("This is not your Birthday!");
    }
}

checkBirthday(16, 3);
checkBirthday(2, 11);


