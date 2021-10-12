import React from "react"
import { useQuery } from "@apollo/client"

import { GetStudentsQuery } from "graphql/queries/GetStudents"
import { GetStudents } from "graphql/queries/__generated__/GetStudents"

import { User } from "models/User"

import { QueryError } from "./QueryError"
import { StudentSection } from "./StudentSection"
import { SessionSection } from "./SessionSection"

interface WelcomeDashboardProps {
  user: User;
}

export const WelcomeDashboard = ({
  user,
}: WelcomeDashboardProps): JSX.Element => {
  const { data, loading, error } = useQuery<GetStudents>(GetStudentsQuery)

  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <section className="h-screen">
      <div className="text-center w-full flex justify-center items-center flex-col px-4 py-8 pt-8 text-gray-dark">
        <div className="w-full">
          <h1 className="text-lg py-2" style={{fontSize: "24px"}}>Hi {user.name?.split(" ")[0]}!</h1>
          <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>My Students</p>
          <StudentSection students={data?.students || []} />
          <SessionSection />
        </div>
      </div>
    </section>
  )
}
