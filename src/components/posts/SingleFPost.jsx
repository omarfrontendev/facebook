import React from 'react';
import SinglePost from './SinglePost';

const SingleFPost = ({ friend }) => {

  
  return (
    <>
      {friend?.posts.map(post => <SinglePost key={Math.random()} post={post} friend={friend} />)}
    </>
  )
}

export default SingleFPost;