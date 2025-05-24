import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Select from './elements/Select';
import ButtonRegister from './elements/ButtonRegister';

const SelectClass = () => {
  const [statusSelecionado, setStatusSelecionado] = useState('active');
  const [classeOptions, setClasseOptions] = useState([]);

  useEffect(() => {
    api.get('/classes')
      .then(res => {
        const options = res.data.map(classe => ({
          value: classe.id, 
          label: classe.name 
        }));
        setClasseOptions(options);
      })
      .catch(err => console.error('Erro ao buscar disciplinas:', err));
  }, []); 

    
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/select-discipline'); 
  }

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card  tittle="Seleção de Turma">
        <form onSubmit={handleSubmit}>
            <div>                
                <Select 
                id="class"
                name="class"
                label="Turma:"
                value={statusSelecionado}
                onChange={(e) => setStatusSelecionado(e.target.value)}
                options={classeOptions}
                >
                </Select>
            </div>
            
            <div style={{display:'flex', justifyContent: 'center'}}>
                <ButtonRegister titulo="Avançar" onClick={handleClick} />
            </div>       
        </form>
      </Card>
    </div>
  );
};

export default SelectClass;
