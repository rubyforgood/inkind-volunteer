// @ts-nocheck

import { render, screen, waitFor } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing'
import { QueryClient, QueryClientProvider } from "react-query"
import { EditAccount } from "components/EditAccount"
import { User } from "models/User"
import { BrowserRouter as Router } from 'react-router-dom'

test("renders the edit volunteer information page", async () => {
  const user: User = { firstName: "John", lastName: "Smith", phoneNumber: "111-222-3333", email: "john@smith.com" }
  const fillAccountIcon = (a: boolean) => undefined

  render(
    <MockedProvider addTypename={false}>
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <EditAccount fillAccountIcon={fillAccountIcon} user={user} />
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
