import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Link } from 'react-router-dom'; 
import FriendsContext from '../../store/friends-context';

const SignForm = () => {

  const [userImage, setUserImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const ctx = useContext(AuthContext);
  const userCtx = useContext(FriendsContext); 


  // name
  const [inputNameFocus, setInputNameFocus] = useState(false);
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);
  const [name, setName] = useState('');
  const enteredNameValid = name !== '';
  const nameHasError = !enteredNameValid && inputNameIsTouched;

  const nameFocus = () => {
    setInputNameFocus(true);
  };

  const nameBlure = () => {
    setInputNameFocus(false);
    setInputNameIsTouched(true);
  };

  const nameChange = (e) => {
    setInputNameIsTouched(true);
    setName(e.target.value);
    setError(false)
  };


  // email 
  const [inputEmailFocus, setInputEmailFocus] = useState(false);
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);
  const [email, setEmail] = useState('');
  const enteredEmailValid = email.includes('@');
  const emailHasError = !enteredEmailValid && inputEmailIsTouched;

  const emailFocus = () => {
    setInputEmailFocus(true);
  };

  const emailBlure = () => {
    setInputEmailFocus(false);
    setInputEmailIsTouched(true);
  };

  const emailChange = (e) => {
    setInputEmailIsTouched(true);
    setEmail  (e.target.value);
    setError(false)
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
  };

  const regrestionHandler = async e => {
    e.preventDefault();
    setIsLoading(true);
    userCtx.editUser({});
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      setIsLoading(false);
      ctx.login();
      const userData = {
        userName: name,
        url: userImage,
        email, 
        password,
        id: 'user_id',
        state: 'online',
        posts: [],
        friensOfriend: userCtx.friends
      }
      userCtx.editUser(userData)
    }catch (err) {
      setIsLoading(false);
      setError(true)
    }
    setIsLoading(false);
  }

  return (
    <>
    <form className='login_form signup_form' onSubmit={regrestionHandler}>
      <h1>Facebook</h1>
      <div className="input_control img-input">
        <input onChange={e => setUserImage(URL.createObjectURL(e.target.files[0]))} style={{ display: 'none' }} type='file' id='user_image' />
        <label htmlFor='user_image'>
          <img src={userImage ? userImage : './assets/person/default.png'} alt="" />
          <MdAddCircleOutline className='add-icon' />
        </label>
      </div>
      <motion.div className={`input_control ${inputNameFocus ? 'focus' : 'blur'}`}>
          <label htmlFor="userName">
              <AiOutlineUser />
          </label>  
        <input
          type='text' 
          placeholder='Type Your Name' 
          id='userName'
          onFocus={nameFocus}
          onBlur={nameBlure}
          onChange={nameChange}
          value={name}
          />
        <AnimatePresence>
          {nameHasError && 
          <motion.p 
            className='error_p'
            initial={{right: 200, opacity: 0}}
            animate={{right: 0, opacity: 1}}
            exit={{right: 200, opacity: 0}}
          >
            this field can't be empty.
          </motion.p>}
        </AnimatePresence>
      </motion.div>
      <motion.div className={`input_control ${inputEmailFocus ? 'focus' : 'blur'}`}>
          <label htmlFor="email">
              <HiOutlineMail />
          </label>  
        <input
          type='email' 
          placeholder='Type Your Email' 
          id='email'
          onFocus={emailFocus}
          onBlur={emailBlure}
          onChange={emailChange}
          value={email}
          />
        <AnimatePresence>
          {emailHasError && 
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
      <button disabled={!validate} type='submit'>{isLoading ? 'Loading...!' : 'Sign Up'}</button>
      <div className='switch-btn'>
          you already have account? <Link to='/login'>Login</Link>
      </div>
    </form>
    {error && <p className='error-message'>You have entered an invalid email or password!</p>}
    </>
  )
}

export default SignForm;