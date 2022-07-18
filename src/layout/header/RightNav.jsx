import React, { useContext } from 'react';
import List from './List';
import { Link } from 'react-router-dom';
import PersonImage from '../../UI/personImage/PersonImage';
import FriendsContext from '../../store/friends-context';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiMessage2Fill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import AuthContext from '../../store/auth-context';

const RightNav = ({ currentActive, setCurrentActive, requstsNum, requsetHandler, acceptFriend, requests }) => {

  const friendsCx = useContext(FriendsContext);
  const authCtx = useContext(AuthContext);

  return (
    <div className='right_nav flex'>
      <ul className='notidications flex'>
        <li 
          className={`${currentActive === 1 ? 'active' : ''}`} 
          style={{position: 'relative'}}
        >
          <button onClick={() => setCurrentActive(currentActive === 1 ? '' : 1)}>
            <BsFillPersonFill className='icons' />
          </button>
          {requstsNum > 0 && <span>{requstsNum}</span>}
          <List actionHandler={requsetHandler} acceptFriend={acceptFriend} active={currentActive === 1} list={requests} type='request' />
        </li>
        <li 
          id='open_list' 
          className={`${currentActive === 2 ? 'active' : ''}`} 
          style={{position: 'relative'}}
        >
          <button onClick={() => setCurrentActive(currentActive === 2 ? '' : 2)}>
            <RiMessage2Fill className='icons' />
          </button>
          {friendsCx.numOfMessagesm > 0 && <span>{friendsCx.numOfMessagesm}</span>}
          <List active={currentActive === 2 } list={friendsCx.friends.filter(friend => friend?.messages?.text?.length > 0)} type='message' />
        </li>
        <li className='logout_btn'>
          <button onClick={() => {
            signOut(auth); 
            authCtx.logout();   
          }}>
            <BiLogOut className='logout-icon' />
            Logout
          </button>
        </li>
      </ul>
      <Link to={`/user/${friendsCx.user.id}`} className='flex'>
        <span className='user_name'>{friendsCx.user.userName.length > 6 ? `${friendsCx.user.userName.slice(0, 5) }...` : friendsCx.user.userName}</span>
        <PersonImage url={friendsCx.user.url} state='online' size='small' alt='user_img' />
      </Link>
    </div>
  )
}

export default RightNav