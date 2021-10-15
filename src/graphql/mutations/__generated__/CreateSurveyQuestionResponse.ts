/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSurveyQuestionResponse
// ====================================================

export interface CreateSurveyQuestionResponse_createSurveyQuestionResponse_questionResponse {
  __typename: "SurveyQuestionResponse";
  id: string;
}

export interface CreateSurveyQuestionResponse_createSurveyQuestionResponse {
  __typename: "CreateSurveyQuestionResponsePayload";
  questionResponse: CreateSurveyQuestionResponse_createSurveyQuestionResponse_questionResponse;
}

export interface CreateSurveyQuestionResponse {
  createSurveyQuestionResponse: CreateSurveyQuestionResponse_createSurveyQuestionResponse | null;
}

export interface CreateSurveyQuestionResponseVariables {
  surveyResponseId: string;
  questionId: string;
  optionIds?: string[] | null;
  reply?: string | null;
}
