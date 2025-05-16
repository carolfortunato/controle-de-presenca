import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProfessorList = () => {
  const [professors, setProfessors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await api.get('/professors');
        setProfessors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar lista de professores');
        setLoading(false);
      }
    };
    fetchProfessors();
  }, []);

  if (loading) {
    return <div>Carregando professores...</div>;
  }

  return (
    <div>
      <h2>Lista de Professores</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Matricula do Prof.</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {professors.length > 0 ? (
            professors.map((professor) => (
              <tr key={professor.id}>
                <td>{professor.name}</td>
                <td>{professor.email}</td>
                <td>{professor.employee_number}</td>
                <td>{professor.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum professor encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorList;
