import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Requests } from '../../Sources/Data';
import FriendsContext from '../../store/friends-context';
import CenterNav from './CenterNav';
import RightNav from './RightNav';

import './header.css';

const Header = ({ setTheme, theme }) => {

  const friendsCx = useContext(FriendsContext);
  const [currentActive, setCurrentActive] = useState('');
  
  // Requsets :=
  const [requests, setRequests] = useState(Requests);
  const [requstsNum, setRequstsNum] = useState(requests.filter(r => r.requsetState === 'pending').length);

  const requsetHandler = (request, i, state) => {
    const updateRequest = {
      ...request,
      requsetState: state
    };   
    const requestsUpdated = requests;
    requestsUpdated.splice(i, 1, updateRequest);
    setRequests(requestsUpdated);

    setRequstsNum(requests.filter(r => r.requsetState === 'pending').length);
  };

  const acceptFriend = (friend) => {
    friendsCx.addFriend(friend);
  };


  return (
    <header className='flex'>
      <nav className='container'>
        <div className='left_nav'>
          <Link to='/timeline' className="logo">Facebook</Link>
        </div>
        <CenterNav 
          theme={theme}
          setTheme={setTheme}
        />
        <RightNav
          currentActive={currentActive}
          setCurrentActive={setCurrentActive}
          requstsNum={requstsNum}
          requsetHandler={requsetHandler}
          acceptFriend={acceptFriend}
          requests={requests}
        />
      </nav>
    </header>
  )
}

export default Header