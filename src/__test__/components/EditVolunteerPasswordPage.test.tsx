// @ts-nocheck

import { render, screen, waitFor } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing'
import { QueryClient, QueryClientProvider } from "react-query"
import { EditAccountPassword } from "components/EditAccountPassword"
import { User } from "models/User"
import { BrowserRouter as Router } from 'react-router-dom'

test("renders the edit volunteer password page", async () => {
  const fillAccountIcon = (a: boolean) => undefined
  const user: User = {}

  render(
    <MockedProvider addTypename={false}>
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <EditAccountPassword fillAccountIcon={fillAccountIcon} user={user} />
        </Router>
      </QueryClientProvider>
    </MockedProvider>
  )
  await waitFor(() => {
    expect(screen.getByPlaceholderText(/Old Password/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/^New Password$/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Reenter New Password/)).toBeInTheDocument()
    expect(screen.getByText(/Done/)).toBeInTheDocument()
  })
})
