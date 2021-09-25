import { gql } from "@apollo/client";

export const SignInMutation = gql`
  mutation SignIn($credentials: AuthProviderCredentialsInput!) {
    signInUser(credentials: $credentials) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;
