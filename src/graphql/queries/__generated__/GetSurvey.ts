/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSurvey
// ====================================================

export interface GetSurvey_survey_questions_options {
  __typename: "QuestionOption";
  id: string;
  label: string;
}

export interface GetSurvey_survey_questions {
  __typename: "Question";
  id: string;
  prompt: string;
  type: string;
  options: GetSurvey_survey_questions_options[] | null;
}

export interface GetSurvey_survey {
  __typename: "Survey";
  id: string;
  name: string;
  questions: GetSurvey_survey_questions[] | null;
}

export interface GetSurvey {
  /**
   * A single survey
   */
  survey: GetSurvey_survey;
}

export interface GetSurveyVariables {
  id: string;
}
