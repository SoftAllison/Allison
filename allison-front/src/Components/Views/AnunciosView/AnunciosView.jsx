// eslint-disable-next-line no-unused-vars
import React from 'react';
import Anuncios from '../../AnunciosB/Anuncios';

function AnunciosView({ inputValue }) {
  return (
    <div className="anuncio">
      <p>Nuevo Anuncio: {inputValue}</p>
    </div>
  );
}

function AnunciosForm() {
  const [inputValue, setInputValue] = React.useState('');
  const [anuncios, setAnuncios] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnuncios([...anuncios, inputValue]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="form">
        <h1>Publicar un anuncio</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type='submit'>Enviar</button>
          </label>
        </form>
      </div>

      <Anuncios anuncios={anuncios} />
    </>
  );
}

export default AnunciosForm