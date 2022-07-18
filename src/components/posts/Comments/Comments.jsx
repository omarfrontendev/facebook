import React, { useEffect, useState } from 'react';
import { SingleComment } from './SingleComment';
import { FiSend } from 'react-icons/fi';


const Comments = ({ comments, openComments, setComment }) => {

  const [newComment, setNewComment] = useState('');

  const addCommentHandler = e => {
    e.preventDefault();

    const myComment = {
      id: 'user_id',
      comment: newComment,
      liks: 0
    }
    setComment(prev => prev.concat(myComment));
    setNewComment('')
  };

  const deleteCommentHandler = (i) => {
    setComment(prev => prev.filter((p, n) => n !== i));
  };


  return (
    <>
      {openComments && 
        <div 
          className='commets_container'
          >
          {comments.map((comment, i) => <SingleComment index={i} key={i} comment={comment} deleteComment={deleteCommentHandler}/>)}
          <form className='add_comment' onSubmit={addCommentHandler}>
            <input type='text' value={newComment} placeholder='type acomment...!' onChange={e => setNewComment(e.target.value)}/>
            <button type='submit'><FiSend/></button>
          </form>
        </div>
        }
    </>
    )
}

export default Comments