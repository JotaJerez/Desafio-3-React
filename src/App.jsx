import React, {useState} from 'react'

import Listado from './components/Listado' // Requerimientos Punto 1
import Formulario from './components/Formulario' // Requerimientos Punto 1
import Buscador from './components/Buscador' // Requerimientos Punto 1
import Alert from './components/Alert' // Requerimientos Punto 1

import { BaseColaboradores } from './BaseColaboradores' // Requerimientos Punto 2

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: ""
  });

  const [colaboradores, setColaboradores] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <>
      <Buscador />
      <div className='row'>
        <div className='col-lg-8 col-md-12'>
          <Listado colaboradores={colaboradores} BaseColaboradores={BaseColaboradores} />
        </div>

        <div className='col-lg-4 col-md-12'>
          <div className='d-flex flex-column align-items-center'>
            <Formulario agregarColaborador={agregarColaborador} setAlert={setAlert} />
            {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
