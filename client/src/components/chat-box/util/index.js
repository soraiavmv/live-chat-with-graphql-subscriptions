import { gql } from '@apollo/client';

export const getMessagesSubscription = gql`
subscription getMessagesSubscription {
  messages {
    content
    id
    user
  }
}
`;

export const getMessagesQuery = gql`
query getMessagesQuery {
  messages {
    content
    id
    user
  }
}
`