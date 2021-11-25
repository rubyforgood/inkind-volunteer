import { gql } from '@apollo/client'

export const GetSurveyResponseQuery = gql`
  query GetSurveyResponse($id: ID!) {
    surveyResponse(id: $id) {
      id
      survey {
        id
        name
        questions {
          id
          heading
          prompt
          description
          type
          options {
            id
            label
          }
        }
      }
    }
  }
`
