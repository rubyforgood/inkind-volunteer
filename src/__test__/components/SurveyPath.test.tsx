import { screen, render, waitFor, fireEvent } from "@testing-library/react"
import { SessionDuration } from "components/SessionDuration"
import userEvent from "@testing-library/user-event"

describe("<SessionDuration/>", () => {
  const setup = () => {
    render(<SessionDuration />)
  }

  describe("when user fills the survey and fill out the session duration", () => {
    test("shows a 'Congratulations' message and a link to the student dashboard", async () => {
      setup()
      await waitFor(() => {
        const selectedDate = screen.getByRole('textbox')
        const selectSessionDuration = screen.getByRole('textbox')
        const chosenOption = screen.getByText(/30 minutes/i)
        const submitButton = screen.getByRole('button', {  name: /submit/i})

        fireEvent.change(selectedDate, {target: {value: '07\/13\/2022'}})
        fireEvent.click(selectSessionDuration)
        fireEvent.click(chosenOption)
        userEvent.click(submitButton)

        const happyMessage = screen.getByText(/Congratulations/i)
        const linkStudentDashboard = screen.getByRole('link', {  name: /Back to home page/i})
        expect(happyMessage).toBeInTheDocument()
        expect(linkStudentDashboard).toBeInTheDocument()
      })
    })
  })
})
