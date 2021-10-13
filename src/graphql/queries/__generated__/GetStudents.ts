/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudents
// ====================================================

export interface GetStudents_students {
  __typename: "Student";
  id: string;
  dateOfBirth: any | null;
  email: string | null;
  name: string;
  initials: string;
  createdAt: any;
  updatedAt: any;
}

export interface GetStudents {
  /**
   * All students associated with signed in volunteer
   */
  students: GetStudents_students[] | null;
}
