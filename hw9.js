//Task 1

const str = "Lorem Ipsum is simply dummy text of";

function allWordsUpperCase(str1) {
    const arr = str1.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }

    return arr.join(" ");
}

console.log(allWordsUpperCase(str));

//Task 2  Ani to Ina
// Option 1

function reversedWord(name) {
    const word = name.charAt(0).toLowerCase() + name.substring(1, name.length-1) + name.charAt(name.length-1).toUpperCase();
    return word.split('').reverse().join('');
} 

console.log(reversedWord("Ani"));
console.log(reversedWord("Milana"));
console.log(reversedWord("Anahit"));

// Option 2

function reverseName(name) {
    const word = name.charAt(0).toLowerCase() + name.substring(1, name.length-1) + name.charAt(name.length-1).toUpperCase();
    const arr = word.split("");
    let arr1 = [];
    for(let i = arr.length - 1; i >= 0; i--) {

        arr1.push(arr[i]);
    }
     
    return arr1.join("");
}
console.log(reverseName("Ani"));
