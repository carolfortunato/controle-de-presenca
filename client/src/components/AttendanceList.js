import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Select from './elements/Select';
import ButtonRegister from './elements/ButtonRegister';
import Input from './elements/Input';

const AttendanceList = () => {
    const [statusSelecionado, setStatusSelecionado] = useState('active');
    const [text, setJustification] = useState('');
    const [students, setStudents] = useState([]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const statusSelect = [
      { value: 'active', label: 'Ausente' },
      { value: 'inactive', label: 'Presente' },
      { value: 'justification', label: 'Justificativa' }
    ];

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/select-presence'); 
    }

    useEffect(() => {
        api.get('/students')
        .then((response) => {
            setStudents(response.data);
        })
        
    }, []);

    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
        <Card style={{width: 'auto'}} >
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr style={{fontSize: 'xx-large'}}>
                            <th>Aluno</th>
                            <th>Status</th>
                            <th>Justificativa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                            <td>{student.name}</td>
                            <td>
                                <Select 
                                    id="statusStudent"
                                    name="statusStudent"
                                    value={statusSelecionado}
                                    onChange={(e) => setStatusSelecionado(e.target.value)}
                                    options={statusSelect}
                                    >
                                </Select>
                            </td>
                            <td>
                                <Input
                                    id="justification"
                                    value={text}
                                    onChange={(e) => setJustification(e.target.value)}
                                    required>
                                </Input>
                            </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', paddingTop:'20px', gap:'30px'}}>
                <ButtonRegister titulo="Marcar presença" colorBackground= "049F09" colorText= "FFFFFF" onClick={handleClick} />    
                <ButtonRegister titulo="Cancelar" onClick={handleClick} />            
            </div>                   
            </form>
        </Card>
        </div>
    );
};

export default AttendanceList;
