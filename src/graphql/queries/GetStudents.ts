import { gql } from '@apollo/client';

export const GetStudentsQuery = gql`
  query GetStudents {
    students {
      id
      dateOfBirth
      email
      name
      createdAt
      updatedAt
    }
  }
`
