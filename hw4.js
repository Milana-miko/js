//Task1
// Guess what should each variable contain (a, b, c, d, e)

let a = 5;
let b = a; // b = 5
let e;
a = {
    name: 'Poghos',
    surName: 'Saghatelyan',
    age: 44,
    gender: 'male'
};
const c = [11, 32, 'Some word',
{
    type: 'dog',
    name: 'Archuk'
}];
a = c; /* а = [11, 32, 'Some word',
              {
                  type: 'dog',
                  name: 'Archuk'
              }];*/
c.age = 3; /* c = [11, 32, 'Some word',
                         {
                             type: 'dog',
                             name: 'Archuk',
                         }
                         age: 3,
                         surName: "Karapetyan"
                         ];*/
a.surName = 'Karapetyan'; /* а = [11, 32, 'Some word',
                                        {
                                            type: 'dog',
                                            name: 'Archuk'
                                        },
                                        age: 3,
                                        surName: "Karapetyan"
                                        ];*/
let d = false;
d = e; // d = undifuned
// e = undifuned

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


//Task2
// write a function to get the names from the people array and for each person in zodiacSign array
// get matching object accoring to index and display
// if zodiacSignName exists '<personName> is <zodiacSignName>, his/her supporting planet is <sodiacSignPlanet> and color is <sodiacSignColor>
// else, if zodiacSignName does not exist, return 'No zodiacsign found for <personName>, please, check info.'
// написать функцию для получения имен из массива людей и для каждого человека в массиве zodiacSign
// получить соответствующий объект в соответствии с индексом и отобразить
// если zodiacSignName существует '<personName> - это <zodiacSignName>, его/ее поддерживающая планета - <sodiacSignPlanet> и цвет - <sodiacSignColor>
// иначе, если zodiacSignName не существует, вернуть 'Знак зодиака не найден для <personName>, пожалуйста, проверьте информацию.'

const people = ['Silvik', 'Ani S.', 'Gago', 'Ani I.', 'Milana', 'Seda', 'Poghos'];
const zodiacSign = [
    {
        zodiacSignName: 'Gemini',
        supportingPlanet: 'Mercury',
        color: 'yellow'
    },
    {
        zodiacSignName: 'Capricorn',
        supportingPlanet: 'Saturn',
        color: 'grey'
    },
    {
        zodiacSignName: 'Aquarius',
        supportingPlanet: 'Uranus and Saturn',
        color: 'blue'
    },
    {
        zodiacSignName: 'Libra',
        supportingPlanet: 'Venus',
        color: 'light pink and blue'
    },
    {
        zodiacSignName: 'Aries',
        supportingPlanet: 'Mars',
        color: 'red'
    },
    {
        zodiacSignName: 'Scorpio',
        supportingPlanet: 'Pluto and Mars',
        color: 'black'
    },
    {
        zodiacSignName: '',
        supportingPlanet: '',
        color: ''
    },
];

function isZodiacSignNameExists(peopleArray, zodiacArray) {
    if(zodiacArray.zodiacSignName !== "") {
        return peopleArray + " is " + zodiacArray.zodiacSignName + " his/her supporting planet is " + zodiacArray.supportingPlanet + " and color is " + zodiacArray.color;
    }else {
        return "No zodiacsign found for " + peopleArray + ", please, check info.";
    }
}
console.log(isZodiacSignNameExists(people[0], zodiacSign[0]));
console.log(isZodiacSignNameExists(people[1], zodiacSign[1]));
console.log(isZodiacSignNameExists(people[2], zodiacSign[2]));
console.log(isZodiacSignNameExists(people[3], zodiacSign[3]));
console.log(isZodiacSignNameExists(people[4], zodiacSign[4]));
console.log(isZodiacSignNameExists(people[5], zodiacSign[5]));
console.log(isZodiacSignNameExists(people[6], zodiacSign[6]));


//Task3
// Wite a function, that will get a number as an argument and check,
// if the number is positive, will return square of the number (tvi qarakusin)
// else will return 'Please, provide a positive number';

function isPositive(num) {
    if(num >= 0) {
        return num * num;
    } else {
        return "Please, provide a positive number";
    }
}
console.log(isPositive(5));
console.log(isPositive(-2));
