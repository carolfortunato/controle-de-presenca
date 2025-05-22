import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Input from './elements/Input';
import ButtonRegister from './elements/ButtonRegister';

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
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card tittle= "Criar classe">        
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <Input   
              label="Nome da Classe"           
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            >
            </Input>
          </div>

          <div>
            <Input
              label="Semestre"
              type="text"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
            </Input>
          </div>

          <div style={{display:'flex', justifyContent: 'center'}}>
            <ButtonRegister titulo="Criar classe" colorBackground= "049F09" colorText= "FFFFFF"/>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateClasse;
