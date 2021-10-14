import { useQuery } from "@apollo/client"

import { Login } from "components/Login"
import { MainNav } from "components/MainNav"
import { GetCurrentUser } from "graphql/queries/GetCurrentUser"

import { QueryError } from "./partials/QueryError"

export const Landing = (): JSX.Element => {
  const { data, loading, error } = useQuery(GetCurrentUser)

  if (loading || !data) return <p>loading...</p>
  if (error) return <QueryError error={error} />

  return (
    <div className="text-center">
      {data.currentUser ? (
        <MainNav user={data.currentUser} />
      ) : (
        <Login />
      )}
    </div>
  )
}
