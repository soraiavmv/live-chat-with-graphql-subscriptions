import React, { useEffect, useState } from 'react';
import Message from '../message';
import { useSubscription, useQuery } from '@apollo/client';
import { getMessagesSubscription, getMessagesQuery } from './util';

const ChatBox = () => {
  const [messagesToShow, setMessagesToShow] = useState([]);
  const { data: queriedMessages } = useQuery(getMessagesQuery);
  const { data } = useSubscription(getMessagesSubscription);

  useEffect(() => {
    if (queriedMessages?.messages && messagesToShow.length === 0) {
      setMessagesToShow(queriedMessages.messages);
      return;
    }

    if (data?.messages) {
      setMessagesToShow(data.messages)
    }
  }, [data, messagesToShow.length, queriedMessages]);

  return (
    <div>
      {messagesToShow &&
        messagesToShow.map((message, index) => (
          <Message key={`message-${index}`} message={message} />)
        )}
    </div>
  );
};

export default ChatBox;
