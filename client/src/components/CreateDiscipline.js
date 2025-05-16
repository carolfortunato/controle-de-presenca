import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreateDiscipline() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    workload: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, code, workload } = formData;

    if (!name || !code || !workload) {
      return setMessage('Preencha todos os campos.');
    }

    try {
      await api.post('/disciplines', { name, code, workload });
      setMessage('Disciplina criada com sucesso!');
      navigate('/disciplines');
    } catch (error) {
      console.error('Erro ao criar disciplina:', error);
      setMessage('Erro ao criar disciplina.');
    }
  };

  return (
    <div className="container">
      <h2>Criar Disciplina</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Código:</label>
          <input name="code" value={formData.code} onChange={handleChange} required />
        </div>
        <div>
          <label>Carga Horária:</label>
          <input
            name="workload"
            type="number"
            value={formData.workload}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateDiscipline;
