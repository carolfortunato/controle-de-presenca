import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Input from './elements/Input';
import ButtonRegister from './elements/ButtonRegister';

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
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card tittle= "Criar Disciplina">
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              label="Nome:"
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            >
            </Input>
          </div>
          <div>
            <Input
              label="Código:"
              name="code" 
              value={formData.code} 
              onChange={handleChange} 
              required
            >
            </Input>
          </div>
          <div>
            <Input
              label="Carga Horária:"
              name="workload"
              type="number"
              value={formData.workload}
              onChange={handleChange}
              required
              >                
            </Input>
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
             <ButtonRegister titulo="Cadastrar" colorBackground= "049F09" colorText= "FFFFFF"/>
          </div>
        </form>
        {message && <p>{message}</p>}
      </Card>
    </div>
  );
}

export default CreateDiscipline;
