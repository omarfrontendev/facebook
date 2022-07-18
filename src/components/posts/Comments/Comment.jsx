import React, { useState } from 'react';
import PersonImage from '../../../UI/personImage/PersonImage';
import { MdClose } from 'react-icons/md';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';


const Comment = ({ comment, user, deleteComment, i }) => {

  const [likedComment, setLikedComment] = useState(false);
  const [liks, setLiks] = useState(comment.liks);

  return (
    <div className='comment'>
      <div className="top_comment flex">
          <PersonImage size='small' state={user?.state} url={user?.url}/>
          <h4>{user?.userName}</h4>
        <button className="delete_comment" onClick={() => deleteComment(i)}>
            <MdClose />
        </button>
      </div>
      <p>{comment.comment}</p>
      <div className='like_comment flex'>
        <span>{liks}</span>
        <button onClick={() => {
          setLikedComment(!likedComment);
          setLiks(likedComment ? liks - 1 : liks + 1);
        }}>{likedComment ? <FcLike /> : <FcLikePlaceholder />}</button>
      </div>
    </div>
  )
}

export default Comment