import React from "react";
import { useQuery } from "react-query";
import { client } from "lib/client";
import { User } from "models/User";
import { StudentSelect } from "./StudentSelect";
import { SessionSelect } from "./SessionSelect";
import { Form, Formik } from "formik";
interface WelcomeDashboardProps {
  authToken: string;
  user: User;
}

export const WelcomeDashboard = ({
  authToken,
  user,
}: WelcomeDashboardProps): JSX.Element => {
  const [meetingDate, setMeetingDate] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [studentId, setStudentId] = React.useState<number | null>(null);

  const { data: students, isLoading} = useQuery({
    queryKey: "students",
    queryFn: () =>
      client("students", { token: authToken }).then((data) => data.students)
  });

  console.log("students", students);

  const { data: sessions, isLoading:studentsLoading } = useQuery({
    queryKey: "sessions",
    queryFn: () =>
      client("sessions", { token: authToken }).then((data) => data.sessions)
  });

  console.log("sessions", sessions);

  if (isLoading || studentsLoading) {
    return <div>Loading ....</div>;
  }

  const onStudentChange = (event: React.ChangeEvent): void => {
    const selectedStudentId = (event.currentTarget as HTMLInputElement).value;
    setStudentId(parseInt(selectedStudentId));
  };

  return (
    <>
      <h1 className="text-lg font-semibold py-2">
        Hi, {user.firstName}!
      </h1>
      <p className="text-lg font-semibold py-2 text-left">My Students</p>

      <Formik
        initialValues={{ studentId: null, meetingDate: meetingDate }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <StudentSelect onChange={onStudentChange} students={students} />
            <SessionSelect sessions={sessions} />
          </Form>
        )}
      </Formik>
    </>
  );
};
