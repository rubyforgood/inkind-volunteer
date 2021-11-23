import { gql } from "@apollo/client"

export const CreateSupportTicketMutation = gql`
  mutation CreateSupportTicket($surveyResponseId: ID!, $description: String) {
    createSupportTicket(
      surveyResponseId: $surveyResponseId,
      description: $description
    ) {
      supportTicket {
        id
      }
    }
  }
`
