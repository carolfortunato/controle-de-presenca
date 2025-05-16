import React, { useEffect, useState } from 'react';
import api from '../services/api';

function DisciplineList() {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    api.get('/disciplines')
      .then(res => setDisciplines(res.data))
      .catch(err => console.error('Erro ao buscar disciplinas:', err));
  }, []);

  return (
    <div className="container">
      <h2>Lista de Disciplinas</h2>
      {disciplines.length === 0 ? (
        <p>Nenhuma disciplina cadastrada.</p>
      ) : (
        <ul>
          {disciplines.map(discipline => (
            <li key={discipline.id}>
              <strong>{discipline.name}</strong> (Código: {discipline.code} | Carga horária: {discipline.workload}h)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisciplineList;
