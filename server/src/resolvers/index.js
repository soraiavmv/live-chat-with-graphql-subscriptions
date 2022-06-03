const messages = []; // TODO:: use DB in the future

export const resolvers = {
  Query: {
    messages: () => messages
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