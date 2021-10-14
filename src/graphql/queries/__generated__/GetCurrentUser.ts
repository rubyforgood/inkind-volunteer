/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_currentUser {
  __typename: "User";
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  email: string | null;
  initials: string;
  role: string | null;
}

export interface GetCurrentUser {
  /**
   * Currently logged in user
   */
  currentUser: GetCurrentUser_currentUser | null;
}
