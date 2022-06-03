import React, { useEffect, useState } from 'react';
import Message from '../message';
import MessageInput from '../input';
import { useSubscription, useQuery } from '@apollo/client';
import { getMessagesSubscription, getMessagesQuery } from './gql';

const ChatBox = ({ username }) => {
  const [messagesToShow, setMessagesToShow] = useState();
  const { data: queriedMessages } = useQuery(getMessagesQuery);
  const { data } = useSubscription(getMessagesSubscription);

  useEffect(() => {
    if (queriedMessages?.messages && !messagesToShow) {
      setMessagesToShow(queriedMessages.messages);
      return;
    }

    if (data?.messages) {
      setMessagesToShow(data.messages)
    }
  }, [data, messagesToShow, queriedMessages]);

  return (
    <div>
      {messagesToShow &&
        messagesToShow.map((message, index) => (
          <Message
            key={`message-${index}`}
            message={message}
            isSelf={username === message.user}
          />)
        )}
      <MessageInput username={username} />
    </div>
  );
};

export default ChatBox;
