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

export const updateUserPasswordMutation = gql`
  mutation UpdateUserPassword($oldPassword: String!, $password: String!) {
    success: updateUserPassword(oldPassword: $oldPassword, password: $password)
  }
`
