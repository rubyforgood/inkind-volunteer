/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetSurveyResponse
// ====================================================


export interface GetSurveyResponse_surveyResponse_survey_questions_options {
  __typename: "QuestionOption";
  id: string;
  label: string;
}

export interface GetSurveyResponse_surveyResponse_survey_questions {
  __typename: "Question";
  id: string;
  prompt: string;
  type: string;
  options: GetSurveyResponse_surveyResponse_survey_questions_options[] | null;
}

export interface GetSurveyResponse_surveyResponse_survey {
  __typename: "Survey";
  id: string;
  name: string;
  questions: GetSurveyResponse_surveyResponse_survey_questions[] | null;
}

export interface GetSurveyResponse_surveyResponse {
  __typename: "SurveyResponse";
  id: string;
  survey: GetSurveyResponse_surveyResponse_survey;
}

export interface GetSurveyResponse {
  /**
   * A single survey response
   */
  surveyResponse: GetSurveyResponse_surveyResponse;
}

export interface GetSurveyResponseVariables {
  id: string;
}
