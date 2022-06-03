import ChatBox from './components/chat-box';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/index';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChatBox />
    </ApolloProvider>
  );
}

export default App;
