//Task1
// You are doing shopping and already have some items in your shopping cart.
// You need to make sure that you don't buy the same item many times.
// So, if you already have that item in shopping, card, don't add it
// If you don't have it, return 'I am adding <ITEM> to my shopping cart'.
// Create a function that will get shoppingCart and item as an argument and if the item is not
// in shoppingCart, return 'I am adding <ITEM> to my shopping cart'.

const shoppingCart = ['Milk', 'Bread', 'Butter', 'Cheese', 'Apple', 'Book', 'Ice Cream'];

function checkItemInShoppingCart(arr, item) {
    let arrItem;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            console.log("This " + item + " is alredy include in my shopping cart.");
            arrItem = arr[i];
        }
    }
     if(arrItem === undefined) {
            console.log("I am adding " + item + " to my shopping cart.");
        }
    }
    

checkItemInShoppingCart(shoppingCart, "Watermelon");

checkItemInShoppingCart(shoppingCart, "Cheese");


//Task2
// Create a function that will get persons and num as a parameter and check if person 
// is older / younger or the same age as the given num and return <firstname> <firstname> is younger than me
//  <firstname> <firstname> is older than me or  <firstname> <firstname> is the same age as me.

const persons = [
    {
      firstname: "Dan",
      lastname: "Abramov",
      age: 41
    },
    {
      firstname: "Elizabeth",
      lastname: "Tailor",
      age: 65
    },
    {
      firstname: "Frank",
      lastname: "Lion",
      age: 22
    },
    {
      firstname: "Monika",
      lastname: "Smith",
      age: 16
    },
  ];

function checkAge(arr, num) {
    //let personeAge;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age < num) {
            console.log(arr[i].firstname + " " + arr[i].lastname + " is younger than me.");
            //personeAge = arr[i];
        } else if(arr[i].age > num) {
            console.log(arr[i].firstname + " " + arr[i].lastname + " s older than me.");
        } else if(arr[i].age === num) {
            console.log(arr[i].firstname + " " + arr[i].lastname + " is the same age as me.");
        } 
    } 
}

checkAge(persons, 22);



//Task3
  // Create a function that will return sum (gumar) of all the numbers in array
  // Please, receive the array of numbers as an argument.
const numbers = [1, 4, 33, 7, 55, 66, 8, 2, -100, 57]; //133

function addNumbers(arr) {
    let sum = 0;
    for(i = 0; i <arr.length; i++) {
        sum +=arr[i];
    }
    return sum;
}

console.log(addNumbers(numbers));


//Task4
  // Create a function that will check it the student has passed the exam or not
  // if passed, return, <Name> <age> years old has passed the exam.
  // if not passed, return  <Name> <age> years old failed the exam. He/She will need to try again.

const students = [
    {
      age: 60,
      name: "Penelope Rowland",
      passed: false
    },
    {
      age: 74,
      name: "Imogene Oneil",
      passed: true
    },
    {
      age: 34,
      name: "Vargas Long",
      passed: true
    },
    {
      age: 4,
      name: "Sasha Compton",
      passed: true
    },
    {
      age: 38,
      name: "Robert Dennis",
      passed: false
    },
    {
      age: 17,
      name: "Bethany Watson",
      passed: true
    },
    {
      age: 45,
      name: "Wagner Sparks",
      passed: false
    }
  ];
  
function examPassedOrFailed(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].passed) {
            console.log(arr[i].name + " " + arr[i].age + " " + " years old has passed the exam.");
        } else {
            console.log(arr[i].name + " " + arr[i].age + " " + " years old failed the exam. He/She will need to try again.");
        }
    }
}

examPassedOrFailed(students);