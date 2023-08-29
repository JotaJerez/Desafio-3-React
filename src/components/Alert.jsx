import React from 'react';

const Alert = ({msg, color}) => {
  return (
    <div className={`text-center mt-2 p-1 ${color} text-white`} style={{ maxWidth: '200px', margin: '0 auto' }}>
      {msg}
    </div>
  );
}

export default Alert;