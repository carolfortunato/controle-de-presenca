import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from './elements/Card';
import Input from './elements/Input';
import ButtonRegister from './elements/ButtonRegister';
import CreateProfessor from './CreateProfessor';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    }

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      <Card  tittle="Login">
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    label="Email"
                    type="email"
                    id="emailLogin"
                    name="emailLogin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required    
                />
            </div>
            <div>
                <Input
                id="password"
                name="password"
                label="Senha:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required    
                ></Input>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <ButtonRegister titulo="Entrar" />
            </div>
            <div style={{display:'grid', justifyContent: 'center'}}>
            <p>
              Esqueci minha senha
            </p>            
            <p>
             <Link to="/create-professor">Meu primeiro acesso</Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
    );
};
export default Login;