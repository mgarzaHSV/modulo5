// Importa React solo si lo necesitas, aunque en React 17 no es obligatorio
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import data from './extensiones.json5'

export function Table() {
    const [nameInput, setName] = useState('');
    const [departmentInput, setDepartment] = useState('');
    const [extensionInput, setExtension] = useState('');
    const [emailInput, setEmail] = useState('');

    let informationShowed = data.filter(
        person => {
            return (person.name).toLowerCase().includes(nameInput.toLowerCase())
            && (person.department).toLowerCase().includes(departmentInput.toLowerCase())
            && (person.extension).toLowerCase().startsWith(extensionInput.toLowerCase())
            && (person.email).toLowerCase().startsWith(emailInput.toLowerCase());
        });

    return (
        <main>
            <section className='search'>
                <div className="nombre">
                    <label htmlFor="nombreEmpleado">Nombre:</label>
                    <input
                        onChange={(e) => {
                            if (e.target.value.length === 0 || e.target.value.length > 1) {
                                setName(e.target.value);
                            }
                        }}
                        placeholder='Eje: Sergio Perez'
                        type="text"
                        name="nombreEmpleado"
                        id="nomEmp"
                    />
                </div>
                <div className="departamento">
                    <label htmlFor="nombreDepartamento">Departamento:</label>
                    <input
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder='Eje: Sistemas'
                        type="text"
                        name="nombreDepartamento"
                        id="nomDpt"
                    />
                </div>
                <div className="extension">
                    <label htmlFor="extension">Extensión:</label>
                    <input
                        onChange={(e) => setExtension(e.target.value)}
                        placeholder='Eje: 100'
                        type="text"
                        name="extension"
                        id="numExt"
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Eje: nom...@hsanvicente.mx'
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
            </section>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Extensión</th>
                        <th>Celular</th>
                        <th>Correo electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    {informationShowed.length === 0 ?
                        <tr key={1}>
                            <td colSpan={5}>No se encontraron coincidencias.</td>
                        </tr> :
                        informationShowed.map((element, index) => {
                            if (element.name !== "") {
                                return <tr key={index}>
                                    <td style={{ width: '350px' }}>{element.name.toUpperCase()}</td>
                                    <td style={{ width: '200px' }}>{element.department.toUpperCase()}</td>
                                    <td style={{ width: '80px' }}>{element.extension}</td>
                                    <td style={{ width: '100px' }}>{element.phone}</td>
                                    <td style={{ width: '300px' }}>{element.email}</td>
                                </tr>
                            }
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total de elementos: {informationShowed.length}</td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}

ReactDom.render(<Table />, document.getElementById('root'));