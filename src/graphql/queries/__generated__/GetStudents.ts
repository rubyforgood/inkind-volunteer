/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudents
// ====================================================

export interface GetStudents_students {
  __typename: "Student";
  name: string;
  id: string;
  email: string | null;
  nickname: string | null;
  dateOfBirth: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface GetStudents {
  /**
   * All students associated with signed in volunteer
   */
  students: GetStudents_students[] | null;
}
