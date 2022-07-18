import React from 'react';
import { BsCheck2All } from 'react-icons/bs';


const Messages = ({ messages }) => {
  
  return (
    <>
      {messages?.map((message, i) => (
        <div key={i} className={message.type}>
          <p>{message?.text}</p>
          <span>{message?.date || "1m ago"}</span>
          {message?.type === 'your_message' && <BsCheck2All />}
        </div>
      ))}
    </>
  )
}

export default Messages;