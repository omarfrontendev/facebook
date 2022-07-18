import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import LeftBar from './leftbar/LeftBar';

import './layout.css';

const Layout = ({ setTheme, theme }) => {

  return (
    <>
      <Header 
        setTheme={setTheme} 
        theme={theme} 
      />
      <div className={`container wrapper`}>          
        <LeftBar />
        <Outlet />
      </div>
    </>
  );

};

export default Layout;