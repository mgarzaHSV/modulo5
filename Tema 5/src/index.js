import _ from 'lodash'; //Importancion de el contenedor de la variable _
import './estilos.css'
import Imagen from './formula1.png'
import Datos from './datos.csv'
import yaml from './datos.yaml'
import json5 from './datos.json5'
import './estilo.scss'

// Generacion de un nuevo componente
function component(){
    //Creacion de un nuevo elemento div para el DOM
    const elemento = document.createElement('div')
    //lodash
    elemento.innerHTML = _.join(['Hola',Datos[0][1]],' ')
    // Asignacion de estilos al elemento
    elemento.classList.add('fondo') //Agregar clase CSS al elemento
    // Agregar una imagen al elemento
    const miImagen = new Image()
    miImagen.src = Imagen
    elemento.appendChild(miImagen)

    console.log(Datos);
    return elemento
}

console.log(yaml.title)
console.log(json5.owner.name)
// Agregar el componente creado a el DOM
document.body.appendChild(component())

document.body.classList.add('fondo')