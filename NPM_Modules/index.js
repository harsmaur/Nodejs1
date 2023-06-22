const chalk = require('chalk');

var validator = require('validator');


// chalk
console.log(chalk.blue('Hello world!'));

const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

//validator
const res = validator.isEmail('foo@bar.com'); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))

const res1 = validator.isEmail('foo@barcom'); //=> true
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1))