import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

const PostBottom = ({ setIsLiked, isLiked, liks, setLiks, numComments, stOpenComments }) => {
  return (
    <div className="bottom_post flex">
      <div className='flex'>
        <button onClick={() => {
            setIsLiked(!isLiked);
            setLiks(!isLiked ? liks + 1 : liks - 1)
          }}>
          {!isLiked ? <FcLikePlaceholder className='like_icon' /> : <FcLike className='like_icon active' />}
        </button>
        <button>
          {liks} People like it.
        </button>
      </div>
      <button className="bottom_right_post" onClick={() => stOpenComments(prevSt => !prevSt)}>
        {numComments} comments
      </button>
    </div>
  )
}

export default PostBottom