import React from "react";
import { useQuery } from "@apollo/client";
import { QueryError } from "QueryError";

import { GetStudentsQuery } from "graphql/queries/GetStudents";
import { GetStudents } from "graphql/queries/__generated__/GetStudents";

import { User } from "models/User";

import { StudentSelect } from "./StudentSelect";
import { SessionSelect } from "./SessionSelect";

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
    <section className="App h-screen w-full flex justify-center items-center flex-col px-8 py-8 pt-8">
      <div className="w-full max-w-md">
        <h1 className="text-lg font-semibold py-2">Hi, {user.name}!</h1>
        <p className="text-lg font-semibold py-2 text-left">My Students</p>

        <StudentSelect students={data?.students || []} />
        <SessionSelect />
      </div>
    </section>
  );
};
