import ChatBox from './components/chat-box';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
        <ChatBox />
      </ApolloProvider>
  );
}

export default App;
