const path = require('path') //Importar la libreria de NODE para obtener la ruta

module.exports = {
    // Configuracion del archivo de entrada
    entry: './src/index.ts', // Obtener la direccion donde se encuentra el archivo JS
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader', // Usar el loader de TypeScript
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'] // Resuelve las extensiones de los archivos
    },    // Configuracion del archivo de salida
    output: {
        filename: 'bundle.js', // Nombre del archivo que va a tener en la salida
        path: path.resolve(__dirname, 'dist') // Ruta donde se almacenara el archivo corrrespondiente
    },
}
