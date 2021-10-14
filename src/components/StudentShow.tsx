import React from "react"
import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"

import { GetStudentQuery } from "graphql/queries/GetStudent"
import { GetStudentSurveyResponsesQuery } from "graphql/queries/GetStudentSurveyResponses"
import { GetStudent } from "graphql/queries/__generated__/GetStudent"
import { GetStudentSurveyResponses } from "graphql/queries/__generated__/GetStudentSurveyResponses"
import { StudentSurveyResponse } from "models/StudentSurveyResponse"
import { getAge } from "utils/getAge"

import { SessionItem } from "./partials/SessionItem"

interface StudentShowProps {
  id: string
}

export const StudentShow = (): JSX.Element | null => {
  const { id } = useParams<StudentShowProps>()
  const { data, loading } = useQuery<GetStudent>(GetStudentQuery, { variables: { id }})
  const { data: surveyData, loading: surveyLoading } = useQuery<GetStudentSurveyResponses>(GetStudentSurveyResponsesQuery, { variables: { id }})

  if ((loading || surveyLoading) || (!data || !surveyData)) return null

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

      <div className="grid grid-cols-2 my-4 rounded-lg bg-white">
        <div className="flex flex-col items-start p-1 border-b-2 p-3">
          <span className="text-xs">Guardian Name</span>
          <span className="text-base font-medium">{guardianName}</span>
        </div>

        <div className="flex flex-col items-start p-1 border-b-2 p-3">
          <span className="text-xs">Guardian Phone</span>
          <span className="text-base font-medium">{guardianPhoneNumber}</span>
        </div>

        <div className="flex flex-col items-start p-1 border-b-2 p-3">
          <span className="text-xs">Emergency Contact</span>
          <span className="text-base font-medium">{emergencyContactName}</span>
        </div>

        <div className="flex flex-col items-start p-1 border-b-2 p-3">
          <span className="text-xs">Emergency Phone</span>
          <span className="text-base font-medium">{emergencyContactPhoneNumber}</span>
        </div>

        <div className="flex flex-col items-start p-1 p-3">
          <span className="text-xs">Student's Age</span>
          <span className="text-base font-medium">{getAge(dateOfBirth)}</span>
        </div>

        <div className="flex flex-col items-start p-1" />
      </div>

      <Link to={`/student/${id}/survey/1`}>
        <button className="bg-purple text-neutral-50 px-5 py-3 rounded-md">BEGIN SESSION SURVEY</button>
      </Link>

      <p className="text-lg py-2 text-left">Session History</p>
      {surveyData?.studentSurveyResponses?.map((response: StudentSurveyResponse) => (
        <SessionItem
            key={response.id}
            response={response}
        />
      ))}
    </section>
  )
}

