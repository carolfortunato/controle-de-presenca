import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [status, setStatus] = useState('active');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      email,
      registration_number: registrationNumber,
      status,
    };

    try {
      const response = await api.post('/students', newStudent);
      alert('Aluno cadastrado com sucesso!');
      navigate('/students');
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error);
      alert('Erro ao cadastrar aluno');
    }
  };

  return (
    <div>
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Matrícula:</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateStudent;
