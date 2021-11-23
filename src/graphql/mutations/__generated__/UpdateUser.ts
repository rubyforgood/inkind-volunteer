/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { UpdateUserInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================


export interface UpdateUser_user {
  __typename: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phoneNumber: string | null;
}

export interface UpdateUser {
  user: UpdateUser_user;
}

export interface UpdateUserVariables {
  data: UpdateUserInput;
}
