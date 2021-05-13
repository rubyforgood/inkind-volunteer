import React from "react";
import { useQuery } from "react-query";
import { client } from "lib/client";
import { User } from "models/User";
import { StudentSelect } from "./StudentSelect";

interface MeetingFormProps {
  authToken: string;
  user: User;
}

export const MeetingForm = ({
  authToken,
  user,
}: MeetingFormProps): JSX.Element => {
  const { data: students, isLoading } = useQuery({
    queryKey: "students",
    queryFn: () =>
      client("students", { token: authToken }).then((data) => data.students),
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <h2>Record Meeting</h2>
      <form>
        <StudentSelect students={students} />
        <input type="date" id="meeting-date"></input>
      </form>
    </div>
  );
};
