import { useEffect } from "react"
import { useQuery } from "@apollo/client"

import { GetStudentsQuery } from "graphql/queries/GetStudents"
import { GetStudents } from "graphql/queries/__generated__/GetStudents"

import { User } from "models/User"

import { QueryError } from "../partials/QueryError"
import { StudentSection } from "./StudentSection"
import { SessionSection } from "./SessionSection"

interface WelcomeDashboardProps {
  fillHomeIcon: (a: boolean) => void;
  user: User;
}

export const WelcomeDashboard = ({
  fillHomeIcon,
  user,
}: WelcomeDashboardProps): JSX.Element => {
  useEffect(() => {
    fillHomeIcon(true)
  })

  const { data, loading, error } = useQuery<GetStudents>(GetStudentsQuery)

  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <div className="text-center w-full flex items-center flex-col px-4 py-8 pt-8 text-gray-dark">
      <div className="w-full">
        <h1 className="text-lg py-2" style={{fontSize: "24px"}}>Hi {user.name?.split(" ")[0]}!</h1>
        <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>My Students</p>
        <StudentSection students={data?.students || []} />
        <SessionSection />
      </div>
    </div>
  )
}
