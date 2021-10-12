import { gql } from '@apollo/client'

export const GetStudentQuery = gql`
  query GetStudent($id: ID!) {
    student(id: $id) {
      id
      dateOfBirth
      email
      name
      createdAt
      updatedAt
    }
  }
`
