import React, { useEffect, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Login from '../../components/login/Login';
import Overlay from '../../UI/poppup/Overlay';
import { useNavigate } from 'react-router-dom';

import './loginPage.css';

const LoginPage = () => {

  const ctx = useContext(AuthContext).auth;
  const navigate = useNavigate();

  useEffect(() => {
    if(ctx) {
      navigate('/timeline')
    }
  }, [ctx]);

  return (
    <>
      <Overlay state={true} setState={() => {}}/>
      <div className='main_form'>
        <Login/>
      </div>
    </>
  )
}

export default LoginPage