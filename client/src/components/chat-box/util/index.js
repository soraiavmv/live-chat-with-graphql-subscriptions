import { gql } from '@apollo/client';

export const getMessages = gql`
  query {
    messages {
      content
      id
      user
    }
  }
`;


