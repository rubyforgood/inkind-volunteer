import React from "react";
import { useQuery as useLegacyQuery } from "react-query";
import { client } from "lib/client";
import { User } from "models/User";
import { StudentSelect } from "./StudentSelect";
import { SessionSelect } from "./SessionSelect";
import { Form, Formik } from "formik";
import { useQuery } from "@apollo/client";
import { GetStudentsQuery } from "graphql/queries/GetStudents";
import { QueryError } from "QueryError";
import { GetStudents } from "graphql/queries/__generated__/GetStudents";

interface WelcomeDashboardProps {
  user: User;
}

export const WelcomeDashboard = ({
  user,
}: WelcomeDashboardProps): JSX.Element => {
  const [meetingDate, setMeetingDate] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [studentId, setStudentId] = React.useState<number | null>(null);

  const { data, loading, error } = useQuery<GetStudents>(GetStudentsQuery)

  const { data: sessions, isLoading: studentsLoading } = useLegacyQuery({
    queryKey: "sessions",
    queryFn: () =>
      client("sessions", { token: 'asdf' }).then((data) => data.sessions)
  });

  console.log("sessions", sessions);

  if (loading || studentsLoading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <QueryError error={error} />
  }

  const onStudentChange = (event: React.ChangeEvent): void => {
    const selectedStudentId = (event.currentTarget as HTMLInputElement).value;
    setStudentId(parseInt(selectedStudentId));
  };

  return (
    <>
      <h1 className="text-lg font-semibold py-2">
        Hi, {user.name}! ({user.email}, {user.role})
      </h1>
      <p className="text-lg font-semibold py-2 text-left">My Students</p>

      <Formik
        initialValues={{ studentId: null, meetingDate: meetingDate }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <StudentSelect onChange={onStudentChange} students={data?.students || []} />
            <SessionSelect sessions={sessions} />
          </Form>
        )}
      </Formik>
    </>
  );
};
