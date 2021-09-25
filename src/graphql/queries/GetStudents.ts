import { gql } from '@apollo/client';

export const GetStudents = gql`
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