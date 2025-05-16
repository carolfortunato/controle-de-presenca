import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateClasse = () => {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !semester) {
      setErrorMessage('Preencha todos os campos obrigatórios');
      return;
    }

    try {
      const response = await api.post('/classes', {
        name,
        semester
      });

      navigate('/classes');
    } catch (error) {
      console.log(error)
      setErrorMessage('Erro ao criar a classe');
    }
  };

  return (
    <div>
      <h2>Criar Classe</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome da Classe</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="semester">Semestre</label>
          <input
            type="text"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            required
          />
        </div>

        <button type="submit">Criar Classe</button>
      </form>
    </div>
  );
};

export default CreateClasse;
