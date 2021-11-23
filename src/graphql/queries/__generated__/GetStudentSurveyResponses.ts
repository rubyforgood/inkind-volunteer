/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetStudentSurveyResponses
// ====================================================


export interface GetStudentSurveyResponses_studentSurveyResponses_student {
  __typename: "Student";
  name: string;
  initials: string;
}

export interface GetStudentSurveyResponses_studentSurveyResponses_meetingDuration {
  __typename: "MeetingDuration";
  minutes: number;
  startedAt: any;
}

export interface GetStudentSurveyResponses_studentSurveyResponses {
  __typename: "SurveyResponse";
  id: string;
  student: GetStudentSurveyResponses_studentSurveyResponses_student;
  meetingDuration: GetStudentSurveyResponses_studentSurveyResponses_meetingDuration | null;
}

export interface GetStudentSurveyResponses {
  /**
   * All survey_responses for a specific student associated with signed in volunteer
   */
  studentSurveyResponses: GetStudentSurveyResponses_studentSurveyResponses[] | null;
}

export interface GetStudentSurveyResponsesVariables {
  id: string;
}
