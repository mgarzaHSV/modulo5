const path = require('path') //Importar la libreria de NODE para obtener la ruta
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    // Configuracion del archivo de entrada
    entry: './src/index.js', // Obtener la direccion donde se encuentra el archivo JS
    // Configuracion del archivo de salida
    output: {
        filename: 'bundle.js', // Nombre del archivo que va a tener en la salida
        path: path.resolve(__dirname, 'dist') // Ruta donde se almacenara el archivo corrrespondiente
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Usar los loaders para procesar los archivos CSS
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource', // Agregar una ruta donde se guardan las imagenes
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader'], // Usar los loaders para procesar los archivos CSS
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: { parse: yaml.parse }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: { parse: json5.parse }
            }
        ]
    }
}
