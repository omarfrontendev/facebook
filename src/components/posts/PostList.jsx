import React from 'react';
import SingleFPost from './SingleFPost';
import { AnimatePresence, motion } from 'framer-motion';

import './posts.css';

const PostList = ({ friends }) => {

  return (
    <div className='posts_list'>
        {friends?.length ? friends.map(friend => <SingleFPost key={friend.id} friend={friend}/>) : <h1>not Found Posts!</h1>}
    </div>
  );
};

export default PostList;