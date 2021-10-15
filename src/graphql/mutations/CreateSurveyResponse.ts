import { gql } from "@apollo/client"

export const CreateSurveyResponse = gql`
  mutation CreateSurveyResponse($surveyId: ID!, $studentId: ID!, $userId: ID!) {
    createSurveyResponse(surveyId: $surveyId, studentId: $studentId, userId: $userId) {
      response {
        id
      }
    }
  }
`
