import React from 'react';
import './ChatMessage.css';
import {auth} from './firebase';
function ChatMessage({message,time,sender}) {
  return (
    <div className='chat-message'
    style={{
      alignSelf:
      sender === auth?.currentUser?.email ?"flex-end":
      "flex-start",
      backgroundColor: 
      sender == auth?.currentUser?.email?"#102b7bc9" : "#6495ED",
    }}
    >
      <div className='chat-message-text'>
        <p>{message}</p>
      </div>
      <div className='chat-message-date'>
      <p>{new Date(time.toDate()).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default ChatMessage;
