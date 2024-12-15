import _ from 'lodash'; //Importancion de el contenedor de la variable _

// Generacion de un nuevo componente
function component(){
    //Creacion de un nuevo elemento div para el DOM
    const elemento = document.createElement('div')
    //lodash
    elemento.innerHTML = _.join(['Hola','Webpack'],' ')
    return elemento
}

// Agregar el componente creado a el DOM
document.body.appendChild(component())