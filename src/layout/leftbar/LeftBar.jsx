import React, { useContext } from 'react';
import FriendsList from '../../components/friendsList/FriendsList';
import { Link } from 'react-router-dom';
import { MdRssFeed } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiVideoFill } from 'react-icons/ri';
import { MdGroups } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { MdEmojiEvents } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import Card from '../../UI/cards/Card';
import FriendsContext from '../../store/friends-context';

import './leftbar.css';

const LeftBar = () => {

  const friendsCtx = useContext(FriendsContext);

  return (
    <div 
      className={`left_bar ${friendsCtx.ShowLeftbar ? 'showLeftbar' : ''}`}
    >
      <Card>
        <ul className="links">
          <li>
            <Link className='flex' to='/timeline'>
              <MdRssFeed />
              Feed
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <BsFillChatDotsFill />
              Chat
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <RiVideoFill />
              videos
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <MdGroups />
              Groups
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <BsFillBookmarkFill />
              BookMarks
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <BsFillQuestionSquareFill />
              Questions
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <MdRssFeed />
              Jobs
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <MdEmojiEvents />
              Events
            </Link>
          </li>
          <li>
            <Link className='flex' to='/timeline'>
              <GiGraduateCap />
              Courses
            </Link>
          </li>
        </ul>
        <button className='showMore_btn'>Show More</button>
        <br/>
        <FriendsList friends={friendsCtx.friends} />
      </Card>
    </div>
  )
}

export default LeftBar