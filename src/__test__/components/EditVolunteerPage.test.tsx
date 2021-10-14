// @ts-nocheck

import { render, screen, waitFor } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing'
import { QueryClient, QueryClientProvider } from "react-query"
import { EditAccount } from "components/EditAccount"
import { User } from "models/User"
import { updateUserMutation } from "graphql/mutations/UpdateUserMutation"
import { BrowserRouter as Router } from 'react-router-dom';

test("renders the edit volunteer information page", async () => {
  const user: User = { firstName: "John", lastName: "Smith", phoneNumber: "111-222-3333", email: "john@smith.com" }

  render(
    <MockedProvider mocks={mocks()} addTypename={false}>
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <EditAccount user={user} />
        </Router>
      </QueryClientProvider>
    </MockedProvider>
  )
  await waitFor(() => {
    const firstName = screen.getByDisplayValue(/John/)
    const lastName = screen.getByDisplayValue(/Smith/)
    const email = screen.getByDisplayValue(/john@smith/)
    const phoneNumber = screen.getByDisplayValue(/111-222-3333/)
    const doneBtn = screen.getByText(/Done/)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(phoneNumber).toBeInTheDocument()
    expect(doneBtn).toBeInTheDocument()
  })
})

function mocks() {
  return [
    {
      request: {
        query: updateUserMutation,
      },
      result: {
        data: {
          id: 1,
          dateOfBirth: "03/22/07",
          email: "joe@cep.ngo",
          name: "Joe Student",
          createdAt: "2021-10-12 15:00:00",
          updatedAt: "2021-10-12 15:00:00"
        },
      }
    }
  ]
}
