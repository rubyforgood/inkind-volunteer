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
    <section className="w-full px-4 py-8 pt-8 text-gray-dark h-screen">
      <h1 className="text-xl py-2">{name}</h1>
      <p className="text-lg py-2 text-left">Student Information</p>

      <div className="grid grid-cols-2 my-4 rounded-lg">
        <div className="flex flex-col items-start bg-white p-1 border-b-2 p-3">
          <span className="text-xs">Guardian Name</span>
          <span className="text-base font-medium">{guardianName}</span>
        </div>

        <div className="flex flex-col items-start bg-white p-1 border-b-2 p-3">
          <span className="text-xs">Guardian Phone</span>
          <span className="text-base font-medium">{guardianPhoneNumber}</span>
        </div>

        <div className="flex flex-col items-start bg-white p-1 border-b-2 p-3">
          <span className="text-xs">Emergency Contact</span>
          <span className="text-base font-medium">{emergencyContactName}</span>
        </div>

        <div className="flex flex-col items-start bg-white p-1 border-b-2 p-3">
          <span className="text-xs">Emergency Phone</span>
          <span className="text-base font-medium">{emergencyContactPhoneNumber}</span>
        </div>

        <div className="flex flex-col items-start bg-white p-1 p-3">
          <span className="text-xs">Student's Age</span>
          <span className="text-base font-medium">{getAge(dateOfBirth)}</span>
        </div>

        <div className="flex flex-col items-start bg-white p-1" />
      </div>

      <button className="bg-purple text-neutral px-5 py-3 rounded-md">BEGIN SESSION SURVEY</button>

      <p className="text-lg py-2 text-left">Session History</p>
    </section>
  )
}

