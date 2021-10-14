import { gql } from "@apollo/client"

export const GetCurrentUser = gql`
  query GetCurrentUser {
    currentUser {
      id
      name
      firstName
      lastName
      phoneNumber
      email
      initials
      role
    }
  }
`
