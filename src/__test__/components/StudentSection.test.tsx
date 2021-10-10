// @ts-nocheck

import { screen, waitFor } from "@testing-library/react"
import { StudentSection } from "components/StudentSection"
import { Student } from "models/Student"
import React from "react"
import { renderWithQueryProvider } from "utils/test"

test("renders student section", async () => {
  const students: Student[] = [{ name: "John Smith", dateOfBirth: "Jan 1st, 2010" }]

  renderWithQueryProvider(<StudentSection students={students} />)
  await waitFor(() => {
    const studentName = screen.getByText(/John Smith/)
    const studentDateOfBirth = screen.getByText(/Jan 1st, 2010/)

    expect(studentName).toBeInTheDocument()
    expect(studentDateOfBirth).toBeInTheDocument()
  })
})
