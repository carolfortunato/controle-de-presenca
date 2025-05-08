import React, { useState } from 'react';
import api from '../services/api';

const CreateProfessor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [status, setStatus] = useState('active');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProfessor = {
      name,
      email,
      employee_number: employeeNumber,
      status,
    };

    try {
      const response = await api.post('/professors', newProfessor);
      alert('Professor cadastrado com sucesso!');
      setName('');
      setEmail('');
      setEmployeeNumber('');
      setStatus('active');
    } catch (err) {
      setError('Erro ao cadastrar professor. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Professor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeNumber">Matricula do professor</label>
          <input
            type="text"
            id="employeeNumber"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CreateProfessor;
