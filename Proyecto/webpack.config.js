const path = require ('path')
const json5 = require ('json5')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
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
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: { parse: json5.parse }
            }
        ],
    },
    resolve: {
        extensions: ['.js'],  // Permite importar .js sin especificar la extensión
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html'),
        })
    ]
}