const myObj = {
    firstname: "Milana",
    lastname: "Amelyan",
    position: "QA",
    mood: "happe",
    curly: true,
    smartnessLevel: 100000
};

//const otherObj = {...myObj};

//myObj.firstname = "Gago"; //kpoxi menak myObj

// console.log(otherObj);
// console.log(myObj);

//const obj2 = myObj;

//myObj.lastname = "XXX"; // stex popoxvum e ev myObj ev obj2 //ete obj2.position = "ZZZ" kpoxi naev myObj mejiny

// console.log(myObj);
// console.log(obj2);

//const obj3 = {...myObj, position: "dev", mood: "happy"};

//console.log(obj3);

const myArr = ["Karmir", "Dexin", "Kanach"];
const myArr2 = ["Kapuyt", "Sev", "Moxrauyn"];

const otherArr = [...myArr, ...myArr2, "Spitak", {guyn: "Narnjaguyn"}];

//console.log(otherArr);

const{ firstname, lastname, ...otherProps} = myObj; // nuyn e ete gres const firstname = myObj.firstname, const lastname = myObj.lastname // aysinkn stexcum enk popoxakanner myObj tvyalnerov

console.log(firstname);
console.log(lastname);
console.log(otherProps);

//rest - nshanakum e mnacac

//const {position} = myObj;

// const position1 = {
//     position: myObj.position
// };

//console.log(position1);

//const randomObj = {position, otherProps};

//console.log(randomObj);

const {id, curly, ...newSaveObj} = myObj;
//console.log(newSaveObj);
