//Task 1

const str = "Lorem Ipsum is simply dummy text of";

function allWordsUpperCase(str1) {
    const arr = str1.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
    
}

console.log(allWordsUpperCase(str));

//Task 2  Ani to Ina

function reversedWord(name) {
    let word = name.charAt(0).toLowerCase() + name.substring(1, name.length-1) + name.charAt(name.length-1).toUpperCase();
    return word.split('').reverse().join('');
} 

console.log(reversedWord("Ani"));


