import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import Message from '../message';
import MessageInput from '../input';
import { useSubscription, useQuery } from '@apollo/client';
import { getMessagesSubscription, getMessagesQuery } from './gql';
import './styles.css';

const ChatBox = ({ username }) => {
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    scrollDown();
  }, [messagesToShow])

  const scrollDown = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='outer-container'>
      <div className='chat-container'>
        {messagesToShow &&
          messagesToShow.map((message, index) => (
            <Message
              key={`message-${index}`}
              message={message}
              isSelf={username === message.user}
            />)
          )}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput username={username} />
    </div>
  );
};

export default ChatBox;
