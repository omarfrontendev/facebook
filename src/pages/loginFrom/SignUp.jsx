import React, { useEffect, useContext } from 'react';
import SignForm from '../../components/login/SignForm'
import AuthContext from '../../store/auth-context';
import Overlay from '../../UI/poppup/Overlay';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const ctx = useContext(AuthContext).auth;
  const navigate = useNavigate();

  useEffect(() => {
    if(ctx) {
      navigate('/timeline');
    }
  }, [ctx])
  
  return (
    <>
      <Overlay state={true} setState={() => {}}/>
      <div className='main_form'>
        <SignForm />
      </div>
    </>
  )
}

export default SignUp