import convertNumberToWords from "./hw8.js";

import chalk from 'chalk';

//import chalkAnimation from 'chalk-animation';

console.log(chalk.bold.italic.green(convertNumberToWords(10)));

console.log(chalk.bgBlue.inverse.yellow(convertNumberToWords(7)));

console.log(chalk.bgBlue.underline(convertNumberToWords(0)));

//console.log(chalkAnimation.rainbow(convertNumberToWords(9)));

