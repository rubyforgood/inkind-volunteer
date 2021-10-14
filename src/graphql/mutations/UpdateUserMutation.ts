import { gql } from "@apollo/client"

export const updateUserMutation = gql`
  mutation UpdateUser($data: UpdateUserInput!) {
    user: updateUser(data: $data) {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`
