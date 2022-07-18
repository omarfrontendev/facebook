import React, { useContext } from 'react';
import FriendsContext from '../../store/friends-context';
import Card from '../../UI/cards/Card';
import { AnimatePresence, motion } from 'framer-motion';


const SettingsList = ({ showSettings, setShowPost, showPost, friend, post }) => {

  const ctx = useContext(FriendsContext);

  return (
    <motion.div layout className='settings_list'>
      <AnimatePresence>
        {showSettings && 
          <motion.div 
            layout
            initial={{scale: 0, x: '40px', y:'-10px'}}
            animate={{scale: 1, x: '0px', y:'0px'}}
            exit={{scale: 0, x: '40px', y:'-25px'}}
            transition={{duration: .3}}
          >
            <Card>
              <div className='setting_list'>
                {showPost && <div onClick={() => ctx.deletePost(post.id, friend)}>Delete</div>}
                <div onClick={() => setShowPost(!showPost)}>{showPost ? 'Hide' : 'Show'}</div>
              </div>
            </Card>
          </motion.div>
            }
      </AnimatePresence>
    </motion.div>
  )
}

export default SettingsList