const fs = require('fs')
const colors = require('colors')

const crearTabla = async ( base, l, h) => {
    try {
        let salida = '';
        for( let i=1; i <= h; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`
        }

        if (l) {
            console.log('======================'.zebra)
            console.log('     Tabla del '.blue,base)
            console.log('======================'.zebra)
            console.log(salida.rainbow)
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        return `tabla-${base}.txt`
    } catch ( err ) {
        throw err
    }

}

module.exports = {
    crearTabla
}