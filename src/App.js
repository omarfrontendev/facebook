import React, { useState, useContext, useEffect, Children } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import LoginPage from './pages/loginFrom/LoginPage';
import SignUp from './pages/loginFrom/SignUp';
import Profile from './pages/profile/Profile';
import AuthContext from './store/auth-context';
import FriendsProvider from './store/FriendsProvider';
import { darkTheme, GlobalStyle, lightTheme } from './styles/GlobalStyle';

const App = () => {

  const [theme, setTheme] = useState('light');

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  const ctx = useContext(AuthContext).auth;

  const AuthRequire = ({ children }) => (
    !ctx ? <Navigate to='/signup' /> : children
  );
    
  return (
    <FriendsProvider> 
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<Navigate to='/timeline' />} />
          <Route  path='/timeline' element={<AuthRequire><Layout setTheme={setTheme} theme={theme} /></AuthRequire>}>
            <Route path='' index  element={<Home />} />
          </Route>
          <Route path='user/*'>
            <Route path=':userID' element={<AuthRequire><Profile  setTheme={setTheme} theme={theme} /></AuthRequire>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </FriendsProvider>

  )
}

export default App
