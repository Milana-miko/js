//Task 1
//Define an array of numbers, create function that will have 2 params (arr, kentOrZuyg).
//If i pass 'kent', it should return kent numbers, if I pass zuyg, it should return 'zuyg' numbers

const numbersArr = [
    {
        num: 1,
        kOrZ: "Kent"
    },
    {
        num: 2,
        kOrZ: "zuyg"
    },
    {
        num: 3,
        kOrZ: "kent"
    },
    {
        num: 4,
        kOrZ: "Zuyg"
    }
];

function numbersFilter(arr, kentOrZuyg){
    return arr.filter((item) => {
        if(item.kOrZ.toLowerCase() === kentOrZuyg) {
            return item;
        } 
    }).map(function(arr) {
        return arr.num;
    });

} 

//console.log(numbersFilter(numbersArr, "zuyg"));


//Task 2
//Use persons array of objects, create a function that will receive persons as a paramter and return another array of object with almost same properties but added age that should be calculated by you.
//Example, for first item it will be: 2023 - 1990 to find out the age

const persons = [
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
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Female",
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
      gender: "Male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "Female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
];

const date = new Date();
const year = date.getFullYear();

function findAge(arr) {
    return arr.map((item) => {
        let bd = item.birthday.split("."); 
        let bdYear = bd.pop();
        let age = year - bdYear;
        item.personeAge = age;
        arr.push(age);
        return item;
    });
}

//console.log(findAge(persons));


//Task 3

const persons1 = [
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
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Female",
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
      gender: "Male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "Female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
];

function findNationality (arr) {
    return arr.reduce((acc, item) => {
        acc.push(item.nationality.charAt(0).toUpperCase() + item.nationality.substring(1));
        return acc;
    }, []);
}

console.log(findNationality(persons1));