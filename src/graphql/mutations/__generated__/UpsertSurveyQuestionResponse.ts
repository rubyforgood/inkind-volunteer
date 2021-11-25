/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: UpsertSurveyQuestionResponse
// ====================================================


export interface UpsertSurveyQuestionResponse_upsertSurveyQuestionResponse_questionResponse {
  __typename: "SurveyQuestionResponse";
  id: string;
}

export interface UpsertSurveyQuestionResponse_upsertSurveyQuestionResponse {
  __typename: "UpsertSurveyQuestionResponsePayload";
  questionResponse: UpsertSurveyQuestionResponse_upsertSurveyQuestionResponse_questionResponse;
}

export interface UpsertSurveyQuestionResponse {
  upsertSurveyQuestionResponse: UpsertSurveyQuestionResponse_upsertSurveyQuestionResponse | null;
}

export interface UpsertSurveyQuestionResponseVariables {
  surveyResponseId: string;
  questionId: string;
  optionIds?: string[] | null;
  reply?: string | null;
}
