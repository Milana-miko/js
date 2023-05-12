// Option 1
function findVowelsCount(str) {
    const vowels = "AaEeIiOoUuYy";
    let vowelsCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(findVowelsCount("HEellOoo"));

// Option 2
function findCountOfVowels(str2) {
    const vowels2 = "AaEeIiOoUuYy";
    let vowelsCount2 = 0;
    for(let i = 0; i < str2.length; i++) {
        if(vowels2.indexOf(str2.at(i)) !== -1) {
            vowelsCount2++;
        }
    }
    return vowelsCount2;
}

console.log(findCountOfVowels("HEello"));


// Option 3
function countVowels(str1) {
    const vowels1 = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
    let vowelsCount1 = 0;
    const arr = str1.split("");
  
    for (let i = 0; i < arr.length; i++) {
        if (vowels1.includes(arr[i])) {
            vowelsCount1++;
        }
    }
  
    return vowelsCount1;
}
  
console.log(countVowels("heEllOo"));
  
 // Option 4

 function findVowels(str4) {
    const vowels4 = "AaEeIiOoUuYy";
    let counter = 0;
    for(let i = 0; i < str4.length; i++) {
        if(vowels4.indexOf(str4.charAt(i)) !== -1) {
            counter++;
        }
    }
    return counter;
}
console.log(findVowels("HellO World"));