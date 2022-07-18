import React from 'react';
import SingleFriendBox from './SingleFriendBox';
import { AnimatePresence, motion } from 'framer-motion';

import './friendsList.css';

const FriendsList = ({ friends, type }) => {

  if(!friends.length) {
    return <p>There's no Friends</p>
  };

  return (
    <motion.ul layout className='friends_list'>
      <AnimatePresence>
        {friends.map((friend, i) => <SingleFriendBox type={type} i={i} key={friend.id} friend={friend} {...friend}/>)}
      </AnimatePresence>
    </motion.ul>
  )
}

export default FriendsList;