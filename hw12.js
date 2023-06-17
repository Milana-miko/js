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
