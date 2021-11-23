/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetSurveyResponses
// ====================================================


export interface GetSurveyResponses_surveyResponses_student {
  __typename: "Student";
  name: string;
  initials: string;
}

export interface GetSurveyResponses_surveyResponses_volunteer {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetSurveyResponses_surveyResponses_meetingDuration {
  __typename: "MeetingDuration";
  minutes: number;
  startedAt: any;
}

export interface GetSurveyResponses_surveyResponses {
  __typename: "SurveyResponse";
  id: string;
  student: GetSurveyResponses_surveyResponses_student;
  volunteer: GetSurveyResponses_surveyResponses_volunteer;
  meetingDuration: GetSurveyResponses_surveyResponses_meetingDuration | null;
}

export interface GetSurveyResponses {
  /**
   * All survey_responses associated with signed in volunteer
   */
  surveyResponses: GetSurveyResponses_surveyResponses[] | null;
}
