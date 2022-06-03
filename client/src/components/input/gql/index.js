import { gql } from '@apollo/client';

export const postNewMessage = gql`
mutation($user: String!, $content: String!) {
  newMessage(user: $user, content: $content)
}
`;
