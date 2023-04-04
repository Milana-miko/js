//Task1
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
  {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
  }
];

function capacity(val) {
    if(val.capacity <= 2) {
       return "Small";
    } else {
       return "Large";
    }
}
console.log(capacity(cars[0]));
console.log(capacity(cars[1]));
console.log(capacity(cars[2]));

// Write a function that will get objects from above array as arguments and check
// if capacity <= 2, will return 'Small, otherwise will return 'Large'
// Call function 3 times with each objects

//Task2
// Write a function that will get 2 arguments as numbers and return which one is bigger

function findBigger(a, b) {
    if(a > b) {
        return a + " is bigger than " + b;
    } else {
        return b + " is bigger than " + a;
    }
}
console.log(findBigger(9, 2));
console.log(findBigger(1, 6));

//Task3
persons = [
  {
    id: 325326,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "Male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325326,
    firstname: "Jannifer",
    lastname: "Lopez",
    image: "url",
    birthday: "03.18.2005",
    gender: "female",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041
  },
  {
    id: 325330,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041
  }
];

function isMaleOrFemale(personGender){
    if(personGender.gender === "female") {
        return "I would like to know more about " + personGender.firstname + " " + personGender.lastname + ".";
    } else {
        return personGender.firstname + " " + personGender.lastname + " mast be a good man.";
    }
}

console.log(isMaleOrFemale(persons[0]));
console.log(isMaleOrFemale(persons[1]));
console.log(isMaleOrFemale(persons[2]));

// Write a function that will get the objects from person as an argument, check if gender is male or female,
// if the gender is female, return, 'I would like to know more about <firstname> <lastname>.'
// else, return '<firstname> <lastname> mast be a good man.'
// Напишите функцию, которая будет получать объекты от человека в качестве аргумента, проверять, является ли пол мужским или женским,
// если пол женский, вернуть, 'Я хотел бы узнать больше о <имя> <фамилия>.'
// иначе, вернуть '<имя> <фамилия> должен быть хорошим человеком.'