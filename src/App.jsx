import React, {useState} from 'react'

import Listado from './components/Listado' // Requerimientos Punto 1
import Formulario from './components/Formulario' // Requerimientos Punto 1
import Buscador from './components/Buscador' // Requerimientos Punto 1
import Alert from './components/Alert' // Requerimientos Punto 1

import { BaseColaboradores } from './BaseColaboradores' // Requerimientos Punto 2

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <>
      <div className='row'>
        <div className='col-8'>
          <Listado colaboradores={colaboradores} BaseColaboradores={BaseColaboradores} />
        </div>
        <div className='col-4'>
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </div>
    </>
  )
}

export default App
