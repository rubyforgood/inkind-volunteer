/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: CreateSupportTicket
// ====================================================


export interface CreateSupportTicket_createSupportTicket_supportTicket {
  __typename: "SupportTicket";
  id: string;
}

export interface CreateSupportTicket_createSupportTicket {
  __typename: "CreateSupportTicketPayload";
  supportTicket: CreateSupportTicket_createSupportTicket_supportTicket;
}

export interface CreateSupportTicket {
  createSupportTicket: CreateSupportTicket_createSupportTicket | null;
}

export interface CreateSupportTicketVariables {
  surveyResponseId: string;
  description?: string | null;
}
