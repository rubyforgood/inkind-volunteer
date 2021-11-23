/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


import { AuthProviderCredentialsInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================


export interface SignIn_signInUser_user {
  __typename: "User";
  id: string;
  name: string;
  email: string | null;
}

export interface SignIn_signInUser {
  __typename: "SignInUserPayload";
  user: SignIn_signInUser_user | null;
  token: string | null;
}

export interface SignIn {
  signInUser: SignIn_signInUser;
}

export interface SignInVariables {
  credentials: AuthProviderCredentialsInput;
}
