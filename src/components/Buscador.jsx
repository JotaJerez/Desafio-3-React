import React from 'react'

const Buscador = ({setSearchTerm}) => {

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <input
        className='my-3'
        type="text"
        placeholder="Buscar un colaborador"
        onChange={handleSearchChange}
      />
    </>
  );
};

export default Buscador