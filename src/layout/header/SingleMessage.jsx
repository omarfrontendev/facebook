import React, { useContext, useState } from 'react';
import PersonImage from '../../UI/personImage/PersonImage';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import ChatBox from '../../components/cahtBox/ChatBox';
import FriendsContext from '../../store/friends-context';


const SingleMessage = ({ item }) => {

  const [openMessage, setOpenMessage] = useState(false);
  const frindsCtx = useContext(FriendsContext);

  const handelShownMessage = () => {
    setOpenMessage(true);
    frindsCtx.seenMessage(item, item?.id)
  };

  return (
    <>
      <li 
        onClick={handelShownMessage} 
        className={`message ${item?.messages?.state === 'pending' ? 'not_seen' : 'seen'}`}
      >
        <div className='name_img flex'>
          {item?.url && <PersonImage state={item?.state} url={item?.url} size='small' />}
          {item?.userName && <span>{item?.userName}</span>}
        </div>
        <p className='message'>
          {/* {item?.messages?.text[0]?.length > 30 ? `${item?.messages?.text[0].substring(0, 30)}...`: item?.messages?.text[0]} */}
          {item?.messages && item?.messages?.text[0]}
        </p>
        {item?.messages?.state !== 'pending' ? <AiFillEye className='icons' /> : <AiFillEyeInvisible className='icons' />}
      </li>
      <ChatBox data={item} state={openMessage} setState={setOpenMessage}/>
    </>
  );
};

export default SingleMessage;