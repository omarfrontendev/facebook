import React, { useContext } from 'react'
import FriendsContext from '../../../store/friends-context';
import Comment from './Comment';

export const SingleComment = ({ comment, deleteComment, index }) => {

  const friendsCtx = useContext(FriendsContext);

  const i = friendsCtx.friends.findIndex(f => f.id === comment.id);

  let user;

  if(comment.id === 'user_id') {
    user = friendsCtx.user;
  }else {
    user = friendsCtx.friends[i];
  }


  return (
    <Comment user={user} comment={comment} i={index} deleteComment={deleteComment} />
  )
}
