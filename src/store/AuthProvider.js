import { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from 'react-router-dom';

const AuthProvider = (props) => {

  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if(localAuth) {
      setAuth(JSON.parse(localAuth))
    }
  }, []);

  const loginHandler = (user) => {
    setAuth(true);
    navigate('/timeline');
    localStorage.setItem('auth', JSON.stringify(true));
  };

  const logoutHandler = () => {
    setAuth(null);
    navigate('/login');
    localStorage.removeItem('auth')
  };


  const authContext = {
    auth: auth,
    login: loginHandler,
    logout: logoutHandler,
  }

  return ( 
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  )

};

export default AuthProvider