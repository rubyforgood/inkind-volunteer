import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { GetStudentQuery } from "graphql/queries/GetStudent"
import { GetStudent } from "graphql/queries/__generated__/GetStudent"
import { getAge } from "utils/getAge"

interface StudentShowProps {
  id: string
}

export const StudentShow = (): JSX.Element | null => {
  const { id } = useParams<StudentShowProps>()
  const { data, loading } = useQuery<GetStudent>(GetStudentQuery, { variables: { id }})

  if (loading || !data) return null

  const {
    name,
    guardianName,
    guardianPhoneNumber,
    emergencyContactName,
    emergencyContactPhoneNumber,
    dateOfBirth
  } = data.student

  return (
    <div>
      <h2>{name}</h2>
      <h3>Student Information</h3>
      <p>Guardian Name</p>
      <p>{guardianName}</p>

      <p>Guardian Phone</p>
      <p>{guardianPhoneNumber}</p>

      <p>Emergency Contact</p>
      <p>{emergencyContactName}</p>

      <p>Emergency Phone</p>
      <p>{emergencyContactPhoneNumber}</p>

      <p>Student's Age</p>
      <p>{getAge(dateOfBirth)}</p>

    </div>
  )
}

