const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

/*
const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');
*/

console.log(argv);

createFile(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));