import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from './elements/Card';


const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await api.get('/classes');
        setClasses(res.data);
      } catch (err) {
        setError('Erro ao buscar as classes');
      }
    };
    fetchClasses();
  }, []);

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card tittle= "Lista de Classes">        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((classe) => (
                <tr key={classe.id}>
                  <td>{classe.name}</td>
                  <td>{classe.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Nenhuma classe cadastrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ClassList;
