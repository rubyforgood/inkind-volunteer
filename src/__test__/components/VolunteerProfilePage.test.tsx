// @ts-nocheck

import { render, screen, waitFor } from "@testing-library/react"
import { Account } from "components/Account"
import { User } from "models/User"

test("renders the volunteer's profile page", async () => {
  const user: User = { firstName: "John", lastName: "Smith", phoneNumber: "111-222-3333", email: "john@smith.com" }

  render(<Account user={user} />)
  await waitFor(() => {
    const firstName = screen.getByText(/John/)
    const lastName = screen.getByText(/Smith/)
    const email = screen.getByText(/john@smith/)
    const phoneNumber = screen.getByText(/111-222-3333/)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(phoneNumber).toBeInTheDocument()
  })
})
