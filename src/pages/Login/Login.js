import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log(email)
    console.log(senha)

    if(email == "netflix@net.com" && senha == '123456'){
      console.log("oi")
      navigate('/movies');
    }else{
      alert("Usuário ou senha errados, tente novamente")
    }
    
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSenha = (e) => {
    setSenha(e.target.value);
  };


  return (
    <>
      <div className='container'>
        <form className='wrapper' onSubmit={handleSubmit}>
          <h2 className='title'>Entrar</h2> 
          <label>Email ou numero de Celular</label>
          <input type='text' className='input' required onChange={handleChangeEmail}/>
          <label>Senha</label>
          <input type='password' className='input' required onChange={handleChangeSenha}/>
          <button className='btn-login'>Entrar</button>
          <h3 className='or'>Ou</h3>
          <button className='btn-login-code'>User código de acesso</button>
          <div className='forget-password'>Esqueceu a senha?</div>
        </form>
      </div>
    </>
  );  
}

export default Login;