import { gql } from "@apollo/client"

export const UpsertSurveyQuestionResponseMutation = gql`
  mutation UpsertSurveyQuestionResponse($surveyResponseId: ID!, $questionId: ID!, $optionIds: [ID!], $reply: String) {
    upsertSurveyQuestionResponse(
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
