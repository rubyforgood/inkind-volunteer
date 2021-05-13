import React from "react";
import { useQuery } from "react-query";
import { client } from "lib/client";
import { User } from "models/User";
import { StudentSelect } from "./StudentSelect";
import { Form, Formik } from "formik";
interface MeetingFormProps {
  authToken: string;
  user: User;
}

export const MeetingForm = ({
  authToken,
  user,
}: MeetingFormProps): JSX.Element => {
  const [meetingDate, setMeetingDate] = React.useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [studentId, setStudentId] = React.useState<number | null>(null);

  const { data: students, isLoading } = useQuery({
    queryKey: "students",
    queryFn: () =>
      client("students", { token: authToken }).then((data) => data.students),
  });

  console.log("students", students);

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  const onStudentChange = (event: React.ChangeEvent): void => {
    const selectedStudentId = (event.currentTarget as HTMLInputElement).value;
    setStudentId(parseInt(selectedStudentId));
  };

  return (
    <>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <h2>Record Meeting</h2>
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
            <input
              value={meetingDate}
              name="meetingDate"
              id="meeting-date"
              type="date"
              onBlur={handleBlur}
              onChange={(event) => setMeetingDate(event.target.value)}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
