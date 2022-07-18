import React from 'react';
import PersonImage from '../../UI/personImage/PersonImage';
import { useNavigate } from 'react-router-dom';


const PostTop = ({ url, state, userName, date, setShowSettings, showSettings, userID }) => {

  const navigate = useNavigate();

  return (
    <div className="post_top flex">
      <div className="post_top_left flex" onClick={() => navigate(`/user/${userID}`)}>
        <PersonImage state={state} url={url} size='small' />
        <span className='userName'>{userName}</span>
        <span className='post_date'>{date}</span>
      </div>
      <div className="post_top_right">
        <button onClick={() => setShowSettings(!showSettings)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  )
}

export default PostTop