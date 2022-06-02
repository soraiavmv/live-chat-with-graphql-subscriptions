import { createServer } from '@graphql-yoga/node';
import { config } from './config/index.js';

const port = config.gqlServer.port;

const messages = [];

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    newMessage(user: String!, content: String!): ID!
  }
`;

const resolvers = {
  Query: {
    messages: () => {
      try {
        console.log(messages);
        return messages;
      } catch (err) {
        console.log(err);
      }
    }
  },
  Mutation: {
    newMessage: (_, { user, content }) => {
      const id = messages.length + 1;
      messages.push({
        id,
        user,
        content
      });

      return id;
    }
  }
};

const startServer = async () => {
  const server = createServer({
    port,
    schema: {
      typeDefs,
      resolvers
    },
  });
  await server.start();
}

void startServer()
  .then(() => console.log(`👂 GQL Server listening on  http://localhost:${port}/ 👂`))
  .catch(console.err);