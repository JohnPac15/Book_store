import { gql } from '@apollo/client';

export const QUERY_All = gql `
  query Users {
    users {
      username
      email
      savedBooks {
        authors
        title
      }
    }
  }
  `
