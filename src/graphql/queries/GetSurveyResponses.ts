import { gql } from '@apollo/client'

export const GetSurveyResponsesQuery = gql`
  query GetSurveyResponses {
    surveyResponses {
      student {
        name
      }
      volunteer {
        id
        name
      }
      meetingDuration {
        minutes
        startedAt
      }
    }
  }
`
