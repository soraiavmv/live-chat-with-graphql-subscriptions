import { createServer } from '@graphql-yoga/node';
import { config } from './config/index.js';
import { typeDefs } from './typeDefs/index.js';
import { resolvers } from './resolvers/index.js';
import { useServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws';

const port = config.gqlServer.port;

const startServer = async () => {
  const schema = {
    typeDefs,
    resolvers
  };

  const server = createServer({
    port,
    schema,
    graphiql: {
      subscriptionsProtocol: 'ws',
    },
  });

  const httpServer = await server.start();

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: server.getAddressInfo().endpoint,
  });

  useServer(
    {
      execute: (args) => args.rootValue.execute(args),
      subscribe: (args) => args.rootValue.subscribe(args),
      onSubscribe: async (ctx, msg) => {
        const { schema, execute, subscribe, contextFactory, parse, validate } =
          server.getEnveloped(ctx);

        const args = {
          schema,
          operationName: msg.payload.operationName,
          document: parse(msg.payload.query),
          variableValues: msg.payload.variables,
          contextValue: await contextFactory(),
          rootValue: {
            execute,
            subscribe,
          },
        };

        const errors = validate(args.schema, args.document);
        if (errors.length) return errors
        
        return args;
      },
    },
    wsServer,
  );
};

void startServer()
  .then(() => console.log(`👂 GQL Server listening on  http://localhost:${port}/ 👂`))
  .catch(console.err);