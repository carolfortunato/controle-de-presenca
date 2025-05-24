import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import ButtonRegister from './elements/ButtonRegister';
import Select from './elements/Select';
import Input from './elements/Input';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [statusSelecionado, setStatusSelecionado] = useState('active');
  const navigate = useNavigate();

  const statusSelect = [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      email,
      registration_number: registrationNumber,
      status: statusSelecionado,
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
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card tittle= "Cadastrar aluno"> 
        <form onSubmit={handleSubmit}>
          <div>
            <Input
            label="Nome Completo"
            type="text"
            id="nomeStudent"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
            required     
            />
          </div>
          <div>
            <Input
            label="Email do aluno"
            type="email"
            id="emailStudent"
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          <div>            
           <Input
            label = "Matricula do aluno"
            type="text"
            id="registrationNumber"
            placeholder="Digite a matricula"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
            />                    
          </div>
          <div>           
            <Select id="status"
                    name="status"
                    label="Status:"
                    value={statusSelecionado}
                    onChange={(e) => setStatusSelecionado(e.target.value)}
                    options={statusSelect}
                    >
            </Select>              
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <ButtonRegister titulo="Cadastrar" colorBackground= "049F09" colorText= "FFFFFF"/>
          </div>
        </form>
      </Card>  
    </div>
  );
};

export default CreateStudent;
