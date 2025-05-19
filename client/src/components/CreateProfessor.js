import React, { useState } from 'react';
import api from '../services/api';
import ButtonRegister from './elements/ButtonRegister';
import Card from './elements/Card';
import Select from './elements/Select';
import { useNavigate } from 'react-router-dom';
import Input from './elements/Input';

const CreateProfessor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [statusSelecionado, setStatusSelecionado] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


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
      navigate('/professors')
    } catch (err) {
      setError('Erro ao cadastrar professor. Verifique os dados e tente novamente.');
    }
  };

  
  return (
    <div style={{display:'flex', justifyContent: 'center'}}> 
    <Card tittle= "Cadastrar professor">        
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Nome Completo"
            type="text"
            id="nome"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
     
          />
        </div>
        <div> 
          <Input
            label="Email para cadastro"
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
           <Input
            label = "Matricula do Professor"
            type="text"
            id="employeeNumber"
             placeholder="Digite sua Matricula"
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
      </Card>
    </div>
);
};

export default CreateProfessor;
