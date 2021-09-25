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
  name: string | null;
  email: string | null;
  role: string | null;
}

export interface GetCurrentUser {
  currentUser: GetCurrentUser_currentUser | null;
}
