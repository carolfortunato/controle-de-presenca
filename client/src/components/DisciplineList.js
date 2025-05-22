import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from './elements/Card';

function DisciplineList() {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    api.get('/disciplines')
      .then(res => setDisciplines(res.data))
      .catch(err => console.error('Erro ao buscar disciplinas:', err));
  }, []);

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card tittle= "Lista de Disciplinas">        
        {disciplines.length === 0 ? (
          <p style={{display:'flex', justifyContent: 'center'}}>Nenhuma disciplina cadastrada.</p>
        ) : (
          <ul>
            {disciplines.map(discipline => (
              <li key={discipline.id}>
                <strong>{discipline.name}</strong> (Código: {discipline.code} | Carga horária: {discipline.workload}h)
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

export default DisciplineList;
