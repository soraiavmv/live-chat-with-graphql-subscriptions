import './App.css';
import ChatBox from './components/chat-box';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ChatBox />
      </div>
    </ApolloProvider>
  );
}

export default App;
