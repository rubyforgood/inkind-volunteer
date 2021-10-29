// @ts-nocheck

import { screen, waitFor } from "@testing-library/react"
import { StudentSection } from "components/WelcomeDashboard/StudentSection"
import { Student } from "models/Student"
import { renderWithQueryProvider } from "utils/test"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test("renders student section", async () => {
  const date = new Date()
  const subtractionOfYears = 13
  date.setFullYear(date.getFullYear() - subtractionOfYears)
  const formattedDate = date.toISOString().slice(0,10)

  const students: Student[] = [{ name: "John Smith", dateOfBirth: formattedDate }]
  const history = createMemoryHistory()

  renderWithQueryProvider(
    <Router history={history}>
      <StudentSection students={students} />
    </Router>
  )
  await waitFor(() => {
    const studentName = screen.getByText(/John Smith/)
    const studentDateOfBirth = screen.getByText(/Age 13/)

    expect(studentName).toBeInTheDocument()
    expect(studentDateOfBirth).toBeInTheDocument()
  })
})
