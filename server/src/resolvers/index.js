import { createPubSub } from '@graphql-yoga/node';

const messages = []; // TODO:: use DB in the future; using array for simplicity
const pubSub = createPubSub();

export const resolvers = {
  Query: {
    messages: () => messages
  },
  Mutation: {
    newMessage: (_, { user, content }) => {
      const id = messages.length + 1;
      const message = {
        id,
        user,
        content
      };
      messages.push(message);
      pubSub.publish('post', message);
      return id;
    }
  },
  Subscription: {
    messages: {
      subscribe: () => pubSub.subscribe('post'),
      resolve: () =>  messages,
    },
  },
};