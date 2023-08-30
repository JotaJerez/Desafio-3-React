import React from 'react';

// Este componente toma dos props como argumentos: msg y color. 
// El prop msg contiene el mensaje que se mostrará en la alerta, 
// y el prop color contiene la clase de color de Bootstrap que se utilizará para dar estilo a la alerta.
const Alert = ({msg, color}) => {
  return (
    <div className={`text-center mt-2 p-1 ${color} text-white`} style={{ maxWidth: '200px', margin: '0 auto' }}>
      {msg}
    </div>
  );
}

export default Alert;