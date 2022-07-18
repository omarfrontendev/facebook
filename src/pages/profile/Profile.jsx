import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Share from '../../components/share/Share'
import Header from '../../layout/header/Header';
import LeftBar from '../../layout/leftbar/LeftBar';
import FriendsContext from '../../store/friends-context';
import UserImages from './UserImages';
import SingleFPost from '../../components/posts/SingleFPost';
import SingleFriend from './SingleFriend';
import { AiFillEdit } from 'react-icons/ai'
import './profile.css';

const Profile = ({ setTheme, theme }) => {

  const ctx = useContext(FriendsContext);
  const { userID } = useParams();  

  const friendIndex = ctx.friends.findIndex(f => f.id === userID)

  let user = userID === ctx?.user?.id ? ctx?.user : ctx?.friends[friendIndex];

  let myPofile = userID === ctx?.user?.id ? true : ctx?.friends[friendIndex] ? false : 'not_friend';

  return (
      <div className='profile'>
        <Header setTheme={setTheme} theme={theme} />
        <div className="profile_wrapper">
          <LeftBar />
          <div className={`user_content ${ctx.ShowLeftbar ? 'showLeftbar' : ctx.ShowRightbar ? 'showRightbar' : ''}`}>
          <UserImages myPofile={myPofile} user={user} />
          <div 
            className={`user_posts_details`}>
            <div className="home_content flex">
              {myPofile && <Share />}
              <div className='posts_list'>
                <SingleFPost friend={user}/>
              </div>
            </div>
            <div className="user_rightbar">
              {myPofile ? 
              <div>
                <h3>{user?.userName} Information</h3>
                <p>City: <input type="text" placeholder='Type Your City' value={user?.city} onChange={e => ctx.editUser({...ctx.user, city: e.target.value})} id='city' /> <label htmlFor='city'><AiFillEdit /></label></p>
                <p>From: <input type="text" placeholder='Type your Country' value={user?.country} onChange={e => ctx.editUser({...ctx.user, country: e.target.value})} id='country' /> <label htmlFor='country'><AiFillEdit /></label></p>
                <p>Relationship: <input type="text" placeholder='Type Your Relationship' value={user?.relationship} onChange={e => ctx.editUser({...ctx.user, relationship: e.target.value})} id='relation' /> <label htmlFor='relation'><AiFillEdit /></label></p>
              </div>
              : 
            <div>
              <h3>{user?.userName} Information</h3>
              <p>City: <span>{user?.city}</span></p>
              <p>From: <span>{user?.country}</span></p>
              <p>Relationship: <span>{user?.relationship}</span></p>
            </div>
              }
              <div>
                <h3>{user?.userName} Friends</h3>
                <div>
                  {user?.friensOfriend.map(friend => <SingleFriend key={friend.id} friend={friend} friends={ctx.friends} />)}
                </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )


}

export default Profile