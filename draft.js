import numWords from 'num-words';

function convertNumberToWords(num) {

    const amountInWords = numWords(num)

    
    return amountInWords;
}

console.log(convertNumberToWords(7));




