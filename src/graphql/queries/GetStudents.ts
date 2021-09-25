import { gql } from '@apollo/client';

export const GetStudentsQuery = gql`
  query GetStudents {
    students {
      name
      id
      email
      nickname
      dateOfBirth
      createdAt
      updatedAt
    }
  }
`