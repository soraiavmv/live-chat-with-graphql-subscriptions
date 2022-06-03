import { createPubSub } from '@graphql-yoga/node';

const messages = []; // TODO:: use DB in the future
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
      subscribe: () => {
        console.log('subscrito!')
        return pubSub.subscribe('post')
      },
      resolve: () => {
        return messages;
      },
    },
  },
};