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
  
 