import React from 'react'
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css";

// Este componente toma dos props como argumentos: colaboradores y BaseColaboradores. 
// El prop colaboradores contiene una lista de colaboradores para mostrar en la tabla, 
// y el prop BaseColaboradores proviene de una base de datos datos adicional que se muestra antes de la lista de colaboradores.

// En la sección tbody (cuerpo de la tabla), se utiliza la función map para recorrer los elementos tanto de BaseColaboradores
//  como de colaboradores y generar filas de tabla (tr) para cada colaborador.
const Listado = ({colaboradores, BaseColaboradores, searchTerm}) => {
  return (
    <div className=''>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
            {(BaseColaboradores.concat(colaboradores)).filter(colaborador =>
              ['nombre', 'correo', 'edad', 'cargo', 'telefono'].some(prop =>
                colaborador[prop].toLowerCase().includes(searchTerm.toLowerCase()))).map(colaborador => (
                <tr key={colaborador.id}>
                    <td>{colaborador.nombre}</td>
                    <td>{colaborador.correo}</td>
                    <td>{colaborador.edad}</td>
                    <td>{colaborador.cargo}</td>
                    <td>{colaborador.telefono}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Listado