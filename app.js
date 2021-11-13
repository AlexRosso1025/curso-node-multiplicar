
const { crearTabla } = require('./helpers/multiplicar')
const  colors  = require('colors/safe');
const argv = require('./config/yargs');

console.clear()


/*const [,,arg3='base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);*/

crearTabla(argv.base, argv.l, argv.h)
    .then( nombreArchivo => console.log( colors.blue(nombreArchivo), colors.green(' was created')))
    .catch( err => console.log( err ))
    