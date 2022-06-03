import React from 'react';
import Message from '../message';
import { useQuery } from '@apollo/client';
import { getMessages } from './util';

const ChatBox = () => {
  const { data } = useQuery(getMessages);

  return (
    <div>
      {data && data.messages &&
        data.messages.map((message, index) => (
          <Message key={`message-${index}`} message={message} />)
        )}
    </div>
  );
};

export default ChatBox;
