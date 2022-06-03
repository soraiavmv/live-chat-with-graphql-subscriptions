import React, { useState } from 'react';
import ChatBox from './components/chat-box';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/index';
import Welcome from './components/welcome';

function App() {
  const [username, setUsername] = useState('');

  return (
    <ApolloProvider client={client}>
      {username
        ? <ChatBox username={username} />
        : <Welcome setUsername={setUsername} />}
    </ApolloProvider>
  );
}

export default App;
