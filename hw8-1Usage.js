import convertNumberToWords from "./hw8.js";

import chalk from 'chalk';

import chalkAnimation from 'chalk-animation';

chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

console.log(chalk.bold.italic.green(convertNumberToWords(1)));

console.log(chalk.bgBlue.inverse.yellow(convertNumberToWords(5)));

console.log(chalk.bgBlue.underline(convertNumberToWords(8)));

chalkAnimation.rainbow(convertNumberToWords(10));

