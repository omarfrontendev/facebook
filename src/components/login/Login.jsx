import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Link } from 'react-router-dom';

const Login = () => {  

  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Name 
  const [inputEmailFocus, setInputEmailFocus] = useState(false);
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);
  const [email, setEmail] = useState('');
  const enteredEmailValid = email.includes('@');
  const nameHasError = !enteredEmailValid && inputEmailIsTouched;
  
  const nameFocus = () => {
    setInputEmailFocus(true);
  };
  
  const nameBlure = () => {
    setInputEmailFocus(false);
    setInputEmailIsTouched(true);
  };

  const nameChange = (e) => {
    setInputEmailIsTouched(true);
    setEmail(e.target.value);
    setError(false);
  };

  // Password 
  const [passswordFocus, setPasswordFocus] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [password, setPasswor] = useState('');
  const [showPassowrd , setShowPassowrd] = useState(false);
  
  const passwordValid = password.length > 6;
  const passowrdHasError = !passwordValid && passwordIsTouched;
  
  const passowrdFocus = () => {
    setPasswordFocus(true);
  };

  const passwordBlur = () => {
    setPasswordFocus(false);
    setPasswordIsTouched(true);
  }

  const passowrdChange = e => {
    setPasswor(e.target.value);
    setPasswordIsTouched(true);
    setError(false)
  };


  // Validate Form

  let validate = false;

  if(passwordValid && enteredEmailValid) {
    validate = true;
  }

  const loginHandler = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user._tokenResponse.registered);
      setIsLoading(false);
      ctx.login();
    }catch (err) {
      setIsLoading(false);
      setError(true)
    }
    
    setIsLoading(false);
  }

  return (
    <>
    <form className='login_form' onSubmit={loginHandler}>
      <h1>Login Facebook</h1>
      <motion.div className={`input_control ${inputEmailFocus ? 'focus' : 'blur'}`}>
          <label htmlFor="userName">
              <HiOutlineMail />
          </label>  
        <input
          type='text' 
          placeholder='Type Your Email' 
          id='userName'
          onFocus={nameFocus}
          onBlur={nameBlure}
          onChange={nameChange}
          value={email}
          autoFocus
        />
        <AnimatePresence>
          {nameHasError && 
          <motion.p 
          className='error_p'
          initial={{right: 200, opacity: 0}}
          animate={{right: 0, opacity: 1}}
          exit={{right: 200, opacity: 0}}
          >
            pleace, includes an '@' in the email address.
          </motion.p>}
        </AnimatePresence>
      </motion.div>
      <motion.div className={`input_control ${passswordFocus ? 'focus' : 'blur'}`}>
        <label htmlFor='password'>
          <RiLockPasswordLine />
        </label>
        <span className='eye-password' onClick={() => setShowPassowrd(prev => !prev)}>
          {showPassowrd ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
        <input 
          onFocus={passowrdFocus}
          onBlur={passwordBlur}
          onChange={passowrdChange}
          value={password}
          type={showPassowrd ? 'text' : 'password'} 
          placeholder='Type Your Password' 
          id='password'
        />
        <AnimatePresence>
          {passowrdHasError
          && <motion.p 
          className='error_p'
          initial={{right: 200, opacity: 0}}
          animate={{right: 0, opacity: 1}}
          exit={{right: 200, opacity: 0}}
          >
            password at least 7 characters.
          </motion.p>}
        </AnimatePresence>
      </motion.div>
      <button disabled={!validate} type='submit'>{isLoading ? 'loading...!' : 'Login'}</button>
      <div className='switch-btn'>
          you don't have account? <Link to='/signup'>Sign Up</Link>
      </div>
    </form>
    {error && <p className='error-message'>You have entered an invalid email or password!</p>}
    </>
  )
}

export default Login;