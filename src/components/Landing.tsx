import { useState } from "react"
import { useQuery } from "@apollo/client"

import { Login } from "components/Login"
import { MainNav } from "components/MainNav"
import { GetCurrentUser } from "graphql/queries/GetCurrentUser"
import { User } from "models/User"

import { QueryError } from "./partials/QueryError"

export const Landing = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  const { loading, error } = useQuery(GetCurrentUser, {
    onCompleted: ({ currentUser }) => {
      setUser(currentUser)
    },
  })

  if (loading) return <p>loading...</p>
  if (error) return <QueryError error={error} />

  return (
    <div className="text-center">
      {user ? (
        <MainNav user={user} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  )
}
