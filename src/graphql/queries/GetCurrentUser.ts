import { gql } from "@apollo/client"

export const GetCurrentUser = gql`
  query GetCurrentUser {
    currentUser {
      id
      name
      email
      role
    }
  }
`
