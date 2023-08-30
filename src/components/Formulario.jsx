import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // Esta función se utiliza para generar identificadores únicos para los colaboradores.

// Este componente toma dos props como argumentos: agregarColaborador y setAlert. 
// El prop agregarColaborador es una función que se utilizará para agregar un nuevo colaborador a la lista, 
// y el prop setAlert se utiliza para mostrar mensajes de alerta en la interfaz de usuario.
const Formulario = ({agregarColaborador, setAlert}) => {
    
    // Se define un objeto llamado initialInputValues que contiene valores iniciales para los campos del formulario.
    const initialInputValues = {
      nombreColaborador: "",
      correoColaborador: "",
      edadColaborador: "",
      cargoColaborador: "",
      telefonoColaborador: ""
    };
  
    // Se utiliza el hook useState para crear el estado inputValues que almacena los valores actuales de los campos del formulario.
    const [inputValues, setInputValues] = useState(initialInputValues);
  
    // Se maneja el evento onSubmit del formulario para capturar el envío del mismo.
    const enviarFormulario = (e) => {
      e.preventDefault();

      if (
        inputValues.nombreColaborador === "" ||
        inputValues.correoColaborador === "" ||
        inputValues.edadColaborador === "" ||
        inputValues.cargoColaborador === "" ||
        inputValues.telefonoColaborador === ""
      ) {
        setAlert({
          error: true,
          msg: "Completa los campos",
          color: "bg-danger"
        })
        return;
      } else if (!isValidEmail(inputValues.correoColaborador)) {
        setAlert({
          error: true,
          msg: "Debes ingresar un correo válido",
          color: "bg-danger"
        })
        return;
      } else {
        setAlert({
          error: false,
          msg: "¡Registro exitoso!",
          color: "bg-success"
        })
      }

      // Se crea un objeto nuevoColaborador con los valores capturados del formulario y un identificador único generado con uuidv4.
      const nuevoColaborador = {
        id: uuidv4(),
        nombre: inputValues.nombreColaborador,
        correo: inputValues.correoColaborador,
        edad: inputValues.edadColaborador,
        cargo: inputValues.cargoColaborador,
        telefono: inputValues.telefonoColaborador
      };

      // Se llama a la función agregarColaborador pasándole el objeto nuevoColaborador para que sea agregado a la lista de colaboradores.
      agregarColaborador(nuevoColaborador);
    
      // Se reinician los valores de los campos del formulario a los valores iniciales.
      setInputValues(initialInputValues);
    };
 
    // Esta función maneja el evento onChange en los campos del formulario.
    // Utiliza el desestructuramiento para obtener el name y el value del campo.
    // Actualiza el estado inputValues utilizando el operador spread (...) para mantener los valores anteriores y actualizar el valor del campo específico.
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues({
        ...inputValues,
        [name]: value
      });
    };

    // Esta función toma una dirección de correo electrónico como argumento y utiliza una expresión regular para verificar si es válida.
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };
  
    // Se renderiza un formulario que contiene campos de entrada para el nombre, correo electrónico, edad, cargo y teléfono del nuevo colaborador.
    // Cada campo de entrada está enlazado con su valor correspondiente en el estado inputValues.
    // El botón "Agregar Colaborador" envía el formulario y desencadena la función enviarFormulario cuando se hace clic.
    // Los mensajes de alerta se gestionan a través del prop setAlert.
    return (
      <>
        <h4 className='text-center'>Agregar Colaborador</h4>
        <div className='d-flex align-items-center justify-content-center'>
          <form onSubmit={enviarFormulario} className='d-flex flex-column'>
            <input
              type='text'
              name='nombreColaborador'
              onChange={handleInputChange}
              value={inputValues.nombreColaborador}
              className='mt-2'
              placeholder='Nombre'
            />
            <input
              type='email'
              name='correoColaborador'
              onChange={handleInputChange}
              value={inputValues.correoColaborador}
              className='mt-2'
              placeholder='Correo'
            />
            <input
              type='number'
              name='edadColaborador'
              onChange={handleInputChange}
              value={inputValues.edadColaborador}
              className='mt-2'
              placeholder='Edad'
            />
            <input
              type='text'
              name='cargoColaborador'
              onChange={handleInputChange}
              value={inputValues.cargoColaborador}
              className='mt-2'
              placeholder='Cargo'
            />
            <input
              type='number'
              name='telefonoColaborador'
              onChange={handleInputChange}
              value={inputValues.telefonoColaborador}
              className='mt-2'
              placeholder='Teléfono'
            />
            <button className='mt-2 bg-primary text-white'> Agregar Colaborador </button>
          </form>
        </div>
      </>
    );
  };
  
  export default Formulario;