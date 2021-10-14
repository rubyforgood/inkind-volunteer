import { gql } from '@apollo/client'

export const GetStudentSurveyResponsesQuery = gql`
  query GetStudentSurveyResponses($id: ID!) {
    studentSurveyResponses(id: $id) {
      id
      student {
        name
        initials
      }
      meetingDuration {
        minutes
        startedAt
      }
    }
  }
`
