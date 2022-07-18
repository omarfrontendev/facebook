import React, { useContext } from 'react'
import { BsCartX } from 'react-icons/bs';
import PostList from '../../components/posts/PostList';
import Share from '../../components/share/Share';
import Rightbar from '../../layout/rightbar/RightBar';
import FriendsContext from '../../store/friends-context';

import './home.css';

const Home = () => {

  const friendsCtx = useContext(FriendsContext);

  return (
    <>
      <div 
        className={`home_content flex ${friendsCtx.ShowLeftbar ? 'showLeftbar' : friendsCtx.ShowRightbar ? 'showRightbar' : ''}`}
      >
        <Share />
        <PostList friends={[friendsCtx.user].concat(friendsCtx.friends.filter(friend => friend.posts))}/>
      </div>
      <Rightbar />
    </>
  )
}

export default Home