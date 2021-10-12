/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudent
// ====================================================

export interface GetStudent_student {
  __typename: "Student";
  id: string;
  dateOfBirth: any | null;
  email: string | null;
  name: string;
  createdAt: any;
  updatedAt: any;
}

export interface GetStudent {
  /**
   * A single student
   */
  student: GetStudent_student;
}

export interface GetStudentVariables {
  id: string;
}
