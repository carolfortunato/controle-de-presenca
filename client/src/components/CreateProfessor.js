import React, { useState } from 'react';
import api from '../services/api';
import ButtonRegister from './elements/ButtonRegister';
import Card from './elements/Card';
import Select from './elements/Select';

const CreateProfessor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [statusSelecionado, setStatusSelecionado] = useState('');
  const [error, setError] = useState('');

  const statusSelect = [
      { value: 'ativo', label: 'Ativo' },
      { value: 'inativo', label: 'Inativo' }
  ];

  const handleStatusChange = (event) => {
     setStatusSelecionado(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const newProfessor = {
    name,
    email,
    employee_number: employeeNumber,
    statusSelecionado,
  };

    try {
      const response = await api.post('/professors', newProfessor);
      alert('Professor cadastrado com sucesso!');
      setName('');
      setEmail('');
      setEmployeeNumber('');
      setStatusSelecionado('active');
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
          <Select id="status"
                  name="status"
                  label="Status:"
                  value={statusSelecionado}
                  onChange={handleStatusChange}
                  options={statusSelect}
                   >
          </Select>
    
        </div>
        <div>
         <ButtonRegister titulo="Cadastrar" colorBackground= "049F09" colorText= "FFFFFF"/>
        </div>
      </form>     
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CreateProfessor;
