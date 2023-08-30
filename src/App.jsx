import React, {useState} from 'react'

import Listado from './components/Listado' // Requerimientos Punto 1
import Formulario from './components/Formulario' // Requerimientos Punto 1
import Buscador from './components/Buscador' // Requerimientos Punto 1
import Alert from './components/Alert' // Requerimientos Punto 1

import { BaseColaboradores } from './BaseColaboradores' // Requerimientos Punto 2

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  // El estado de alert es un objeto que tiene tres propiedades: error, msg y color.
  // Estas propiedades se utilizan para mostrar mensajes de alerta en la interfaz de usuario.
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: ""
  });

  // El estado de colaboradores es un arreglo vacío al principio y se utiliza para almacenar la lista de colaboradores.
  const [colaboradores, setColaboradores] = useState([]);

  // La función agregarColaborador es una función que toma un nuevo colaborador como argumento y agrega ese colaborador al arreglo de colaboradores.
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  // Al componente Listado se le pasa la lista de colaboradores y la fuente de datos BaseColaboradores.
  // El componente Formulario toma como prop la función agregarColaborador y también la función setAlert.
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
