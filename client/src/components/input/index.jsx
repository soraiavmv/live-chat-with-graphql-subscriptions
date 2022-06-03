import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { postNewMessage } from './gql';
import './styles.css';

const MessageInput = ({ username }) => {
  const [postMessage] = useMutation(postNewMessage);

  const [messageContent, setMessageContent] = useState('');

  const sendMessage = useCallback(async () => {
    if (messageContent.length > 0) {
      await postMessage({
        variables: {
          user: username,
          content: messageContent
        }
      });

      setMessageContent('');
    }
  }, [messageContent, postMessage, username]);

  return (
    <div className='message-input-container'>
      <input
        label="message-content"
        value={messageContent}
        onChange={(event) =>
          setMessageContent(event.target.value)
        }
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }}
        className='message-input'
      />
      <button className='send-button' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default MessageInput;