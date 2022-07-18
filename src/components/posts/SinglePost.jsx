import React , { useContext, useEffect, useState } from 'react';
import Card from '../../UI/cards/Card';
import { AnimatePresence, motion } from 'framer-motion';
import Comments from './Comments/Comments';
import PostTop from './PostTop';
import PostBottom from './PostBottom';
import SettingsList from './SettingsList';



const SinglePost = ({ post, friend }) => {

    const [liks, setLiks] = useState(post.numOfLiks);
    const [isLiked, setIsLiked] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [openComments, stOpenComments] = useState(false);
    const [showPost, setShowPost] = useState(true);
    const [comments, setComment] = useState([]);

  useEffect(() => {
    setComment(post?.comments)
  }, []);

  return (
    <motion.div 
      layout 
      style={{width: '100%', overflow: 'hidden', borderRadius: '8px'}}
    >
      <AnimatePresence>
        <Card>
          <motion.div
            layout
            animate={{scale: 1, height: showPost ? '100%' : '35px'}}
            transition={{duration: .6}}
            className='post'
          >
            <PostTop  
              url={friend.url}
              state={friend.state}
              userName={friend.userName}
              date={post.date}
              setShowSettings={setShowSettings}
              showSettings={showSettings}
              userID={friend.id}
            />
            <div className='content_post'>
              {post?.caption && <p className='post_caption'>{post?.caption?.length > 100 ? `${post?.caption.substring(0, 100)}...` : post?.caption}</p>}
              {post?.postImage && <img src={post?.postImage} alt='image'/>}
            </div>
            <PostBottom  
              setIsLiked={setIsLiked}
              isLiked={isLiked}
              setLiks={setLiks}
              liks={liks}
              numComments={comments?.length}
              stOpenComments={stOpenComments}
            />
            <Comments setComment={setComment} openComments={openComments} comments={comments} />  
          </motion.div>
          <SettingsList post={post} friend={friend} showSettings={showSettings} setShowPost={setShowPost} showPost={showPost} />
        </Card>
      </AnimatePresence>
      </motion.div>
  )
}

export default SinglePost