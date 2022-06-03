import { createServer } from '@graphql-yoga/node';
import { config } from './config/index.js';
import { typeDefs } from './typeDefs/index.js';
import { resolvers } from './resolvers/index.js';

const port = config.gqlServer.port;

const startServer = async () => {
  const server = createServer({
    cors: {
      origin: '*',
      methods: ['POST', 'GET'],
    },
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