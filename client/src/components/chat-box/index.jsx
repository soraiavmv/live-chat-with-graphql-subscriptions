import React from 'react';
import Message from '../message';
import { Container } from 'shards-react';
import { useQuery } from '@apollo/client';
import { getMessages } from './util';

const ChatBox = () => {
  const { data } = useQuery(getMessages);

  return (
    <Container>
      {data && data.messages &&
        data.messages.map((message, index) => (
          <Message key={`message-${index}`} message={message} />)
        )}
    </Container>
  );
};

export default ChatBox;
