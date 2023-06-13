const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum(arr) {
    return arr.reduce((acc, item) => {
        return acc + item;
    }, 0);
}

//console.log(sum(numArr));

function kentNumbers(arr) {
    return arr.filter((item) => {
        if(item % 2 !== 0) {
            return item;
        }
    });
}

//console.log(kentNumbers(numArr));

const persons = [
    {
        name: "Milana",
        lastname: "Amelyan",
        age: 35,
        salary: 2000
    },
    {
        name: "Anna",
        lastname: "Avetisyan",
        age: 24,
        salary: 1500
    },
    {
        name: "Nara",
        lastname: "Farmanyan",
        age: 65,
        salery: 5400
    }
];

function addFullname(arr) {
    return arr.map((item) => {
        item.fullname = item.name + " " + item.lastname;
        return item;
    });
}

console.log(addFullname(persons));
