import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Select from './elements/Select';
import ButtonRegister from './elements/ButtonRegister';

const SelectDiscipline = () => {
  const [statusSelecionado, setStatusSelecionado] = useState('active');
  const [disciplineOptions, setDisciplineOptions] = useState([]);


  useEffect(() => {
    api.get('/disciplines')
      .then(res => {
        const options = res.data.map(discipline => ({
          value: discipline.id, 
          label: discipline.name 
        }));
        setDisciplineOptions(options);
      })
      .catch(err => console.error('Erro ao buscar disciplinas:', err));
  }, []); 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/select-presence'); 
  }

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card  tittle="Seleção de Disciplina">
        <form onSubmit={handleSubmit}>
            <div>                
                <Select 
                id="class"
                name="class"
                label="Disciplina:"
                value={statusSelecionado}
                onChange={(e) => setStatusSelecionado(e.target.value)}
                options={disciplineOptions}
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

export default SelectDiscipline;
