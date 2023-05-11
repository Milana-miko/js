/*
const sumTwoNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(sumTwoNumbers(3, 4));

const sum = (num3, num4) => num3 + num4;
console.log(sum(1, 2));
*/
/*
const flowers = ["Gerbera", "Pion", "Rose", "Violet"];

const otherArr = flowers.map((caxik) => {
    return "Sirun " + caxik;
});

console.log(otherArr);
*/

/*
const numbers = [1, 2, 3, 4, -5, 6, 7, 8, 20];
const pows = numbers.map((num) => Math.pow(num, 2));
console.log(pows);
*/
/*
const numbers = [1, -2, 3, 4, -5, 6, 7, 8, 20];
const zuyger = numbers.filter((item) => {
    return item % 2 === 0;
});

console.log(zuyger);
*/
/*
const numbers = [-1, 6, 3];
const reduced = numbers.reduce((acc, item) => {
    return acc + item;
}, 0);
console.log(reduced);
*/

//const numbers = [1, -2, 3, 4, -5, 6, 7, 8, 20];
//numbers.push('Ani');
//console.log(numbers);

//console.log(numbers.pop());


const tazaObj = [ 
    {
    name: "Milana",
    age: 200
},
{
    name: "Gagik",
    age: -200
},
{
    name: "Zablur",
    age: 78530
}
];

const obj2 = tazaObj.filter((valod)=>{
    return valod.age >= 18;
}).map((valod) => {
    return valod.name;
});

console.log(obj2);

