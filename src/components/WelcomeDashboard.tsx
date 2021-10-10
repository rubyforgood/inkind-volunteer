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
    <section className="text-center h-screen w-full flex justify-center items-center flex-col px-8 py-8 pt-8">
      <div className="w-full max-w-md">
        <h1 className="text-lg font-semibold font-nunito py-2">{user.name}</h1>
        <p className="text-lg font-nunito py-2 text-left">My Students</p>

        <StudentSection students={data?.students || []} />
        <SessionSection />
      </div>
    </section>
  )
}
