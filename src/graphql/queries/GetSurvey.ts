import { gql } from '@apollo/client'

export const GetSurveyQuery = gql`
  query GetSurvey($id: ID!) {
    survey(id: $id) {
      id
      name
      questions {
        id
        prompt
        type
        options {
          id
          label
        }
      }
    }
  }
`
