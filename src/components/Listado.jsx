import React from 'react'
import Table from "react-bootstrap/Table"

const Listado = ({colaboradores, BaseColaboradores}) => {
  return (
    <div className=''>
        <Table striped bordered hover table-responsive>
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
            {BaseColaboradores.map(colaborador => ( // Requerimientos Punto 3
                <tr key={colaborador.id}>
                    <td>{colaborador.nombre}</td>
                    <td>{colaborador.correo}</td>
                    <td>{colaborador.edad}</td>
                    <td>{colaborador.cargo}</td>
                    <td>{colaborador.telefono}</td>
                </tr>
                ))}

            {colaboradores.map(colaborador => (
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