const path = require('path') //Importar la libreria de NODE para obtener la ruta

module.exports = {
    // Configuracion del archivo de entrada
    entry: './src/index.js', // Obtener la direccion donde se encuentra el archivo JS
    // Configuracion del archivo de salida
    output: {
        filename: 'main.js', // Nombre del archivo que va a tener en la salida
        path: path.resolve(__dirname, 'dist') // Ruta donde se almacenara el archivo corrrespondiente
    }
}
