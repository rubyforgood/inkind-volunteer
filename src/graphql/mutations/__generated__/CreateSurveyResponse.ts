/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSurveyResponse
// ====================================================

export interface CreateSurveyResponse_createSurveyResponse_response {
  __typename: "SurveyResponse";
  id: string;
}

export interface CreateSurveyResponse_createSurveyResponse {
  __typename: "CreateSurveyResponsePayload";
  response: CreateSurveyResponse_createSurveyResponse_response;
}

export interface CreateSurveyResponse {
  createSurveyResponse: CreateSurveyResponse_createSurveyResponse | null;
}

export interface CreateSurveyResponseVariables {
  surveyId: string;
  studentId: string;
  userId: string;
}
