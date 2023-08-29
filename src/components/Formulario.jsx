import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregarColaborador}) => {
    
    const initialInputValues = {
      nombreColaborador: "",
      correoColaborador: "",
      edadColaborador: "",
      cargoColaborador: "",
      telefonoColaborador: ""
    };
  
    const [inputValues, setInputValues] = useState(initialInputValues);
    const [error, setError] = useState("");
  
    // Función al enviar el formulario
    const enviarFormulario = (e) => {
      e.preventDefault();

      if (
        inputValues.nombreColaborador === "" ||
        inputValues.correoColaborador === "" ||
        inputValues.edadColaborador === "" ||
        inputValues.cargoColaborador === "" ||
        inputValues.telefonoColaborador === ""
      ) {
        setError("¡Completa los campos!");
        return;
      }

      const nuevoColaborador = {
        id: uuidv4(),
        nombre: inputValues.nombreColaborador,
        correo: inputValues.correoColaborador,
        edad: inputValues.edadColaborador,
        cargo: inputValues.cargoColaborador,
        telefono: inputValues.telefonoColaborador
      };

      agregarColaborador(nuevoColaborador);

      // No hay errores :)
      setError("");
    
      // Reiniciar los valores de los inputs después de agregar un colaborador
      setInputValues(initialInputValues);
    };
 
    // Función para manejar cambios en los inputs
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues({
        ...inputValues,
        [name]: value
      });
    };
  
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
            {error && <p className='mt-2 py-3 bg-danger text-white text-center'>{error}</p>}
          </form>
        </div>
      </>
    );
  };
  
  export default Formulario;