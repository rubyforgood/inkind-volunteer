// @ts-nocheck

import { screen, waitFor } from "@testing-library/react"
import { StudentSection } from "components/WelcomeDashboard/StudentSection"
import { Student } from "models/Student"
import { renderWithQueryProvider } from "utils/test"
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test("renders student section", async () => {
  const students: Student[] = [{ name: "John Smith", dateOfBirth: "2008-10-20" }]
  const history = createMemoryHistory()

  renderWithQueryProvider(
    <Router history={history}>
      <StudentSection students={students} />
    </Router>
  )
  await waitFor(() => {
    const studentName = screen.getByText(/John Smith/)
    const studentDateOfBirth = screen.getByText(/Age 12/)

    expect(studentName).toBeInTheDocument()
    expect(studentDateOfBirth).toBeInTheDocument()
  })
})
