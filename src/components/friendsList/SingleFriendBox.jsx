import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonImage from '../../UI/personImage/PersonImage';
import FriendsContext from '../../store/friends-context';
import ChatBox from '../cahtBox/ChatBox'
import { AnimatePresence, motion } from 'framer-motion';
import { BsPersonCircle } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';



const SingleFriendBox = ({ friend, url, userName, state, id, type }) => {

  const friendCtx = useContext(FriendsContext);
  const [sureDelete, setSureDelete] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const messageUpdateHandler = () => {
    setOpenChat(true);
    friendCtx.seenMessage(friend, id);
  }

  return (
    <>
    <motion.li
      layout 
      className="flex"
      initial={{x: 0, opacity: 1}}
      exit={{x: -100, opacity: 0}}
    >
      <div className="friend flex">
        <PersonImage state={state} url={url} size='small' alt='user_img' />
        {userName}
      </div>
      <AnimatePresence>
        {!sureDelete ? 
        <motion.div 
          layout 
          className="btns flex"
          initial={{scale: 0}}
          animate={{scale: 1}}
          exit={{scale: 0}}
          >
            <Link className='btn view_btn flex' to={`/user/${id}`}>
              <BsPersonCircle />
            </Link>
            {type === 'online' && <button onClick={messageUpdateHandler}><BsFillChatDotsFill /></button>}
            <button className='btn delete_btn flex' onClick={() => setSureDelete(true)}>
              <FiTrash2 />
            </button>
        </motion.div> 
          : 
        <motion.div 
          layout 
          className="btns flex"
          initial={{scale: 0}}
          animate={{scale: 1}}
          exit={{scale: 0}}
          >
          <button className='closeBtn' onClick={() => setSureDelete(false)}>
            <MdOutlineCancel />
          </button>
          <button className='sure_btn' onClick={() => friendCtx.deleteFriend(id)}>
            Delete
          </button>
        </motion.div> }
      </AnimatePresence>
    </motion.li>
    <ChatBox data={friend} state={openChat} setState={setOpenChat}/>
    </>
  )
}

export default SingleFriendBox