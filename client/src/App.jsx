import React, { useState } from 'react';
import ChatBox from './components/chat-box';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/index';
import Welcome from './components/welcome';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {username
          ? <ChatBox username={username} />
          : <Welcome setUsername={setUsername} />}
      </div>
    </ApolloProvider>
  );
}

export default App;
