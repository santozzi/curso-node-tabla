const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listado, hasta) => {
    try {

        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if (listado) {
            console.log(colors.green(salida));
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, );

        return colors.rainbow('Se escribio con exito');
    } catch (error) {
        throw error;
    }

};
module.exports = {
    createFile: crearArchivo
}