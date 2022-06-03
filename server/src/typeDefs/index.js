export const typeDefs = `
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

  type Subscription {
    messages: [Message!]
  }
`;