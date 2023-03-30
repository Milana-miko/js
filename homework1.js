const carOne = {
    color: 'purple',
    type: 'minivan',
    brand: 'Toyota'
  };

const carTwo = {
    color: 'red',
    type: 'cabrio',
    brand: 'BMW'
};

const carThree = {
    color: 'grey',
    type: 'truck',
    brand: 'Ford'
};

const carFour = {
    color: 'green',
    type: 'pickup',
    brand: 'Chevrolet'
};

const carFive = {
    color: 'black',
    type: 'station wagon',
    brand: 'Audi'
};

const owners = ["Ani", "Silvik", "Gago", "Seda", "Milana"];

// For every owner according to the number in array create the following sentence:
// <OWNER> has a <COLOR> <Brand> <TYPE> that he/she loves.
// Ani has a green Chevrolet pickup that she loves.
// Good luck!

console.log(owners[0] + " has a " + carFour.color + " " + carFour.brand + " " + carFour.type + " that she loves.");
console.log(owners[1] + " has a " + carOne.color + " " + carOne.brand + " " + carOne.type + " that she loves.");
console.log(owners[2] + " has a " + carThree.color + " " + carThree.brand + " " + carThree.type + " that he loves.");
console.log(owners[3] + " has a " + carTwo.color + " " + carTwo.brand + " " + carTwo.type + " that she loves.");
console.log(owners[owners.length - 1] + " has a " + carFive.color + " " + carFive.brand + " " + carFive.type + " that she loves.");
