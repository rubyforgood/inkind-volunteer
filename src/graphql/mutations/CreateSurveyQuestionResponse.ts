import { gql } from "@apollo/client"

export const CreateSurveyQuestionResponseMutation = gql`
  mutation CreateSurveyQuestionResponse($surveyResponseId: ID!, $questionId: ID!, $optionIds: [ID!], $reply: String) {
    createSurveyQuestionResponse(
      surveyResponseId: $surveyResponseId,
      questionId: $questionId,
      optionIds: $optionIds,
      reply: $reply
    ) {
      questionResponse {
        id
      }
    }
  }
`
