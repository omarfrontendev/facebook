import React, { useEffect, useState } from 'react';
import Overlay from '../../UI/poppup/Overlay';
import Modal from '../../UI/poppup/Modal';
import PersonImage from '../../UI/personImage/PersonImage';
import { Link } from 'react-router-dom';
import { GrSend } from 'react-icons/gr';

import './chatBox.css';
import Messages from './Messages';

const ChatBox = ({ data, state, setState}) => {

  const [messages, setMessages] = useState([]);
  const [myMessage, setMyMessage] = useState('');

  useEffect(() => {
    const currentMessages = data?.messages?.text ? data?.messages?.text?.map(m => {return {text: m, type: 'f_message'}}) : [];
    setMessages(currentMessages);
  }, []);  

  const sendMesssageHandler = e => {
    e.preventDefault();
    const message = {
      text: myMessage,
      type: 'your_message',
      date: 'Now'
    };
    setMessages(prevSt => prevSt.concat(message));
    setMyMessage('');
  };


  return (
    <>
      <Overlay state={state} setState={setState} />
      <Modal state={state} setState={setState}>
        <div className="chat_box">
          <div className="chat_header flex">
            <div className="header_left flex">
              <PersonImage state={data.state} size='medium' url={data.url} />
              <h4>{data.userName}</h4>
              <span className='status'>{data.state}</span>
            </div>
            <div className="header_center">
              <Link to={`/user/${data.id}`}>View Profile</Link>
            </div>
          </div>
          <div className="chat_messages">
            <Messages messages={messages}/>
          </div>
          <div className="chat_footer">
            <form onSubmit={sendMesssageHandler} className='flex'>
              <input 
                type='text'
                placeholder='Message' 
                value={myMessage} 
                onChange={e => setMyMessage(e.target.value)}
              />
              <button type='submit'><GrSend className='send_message'/></button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ChatBox