const str = "In publishing and graphic design";

function findLastCharacter(string) {
    return string.charAt(str.length-1);
}
console.log(findLastCharacter(str));



function allWordsUpperCase(str1) {
    let arr = str1.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
    
}
console.log(allWordsUpperCase(str));

/*
napisat funciyu kotoraya vazvrashaet string naoborot
napriner, Ani vernet Ina */


