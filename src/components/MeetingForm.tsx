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

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  const onStudentChange = (event: React.ChangeEvent): void => {
    const selectedStudentId = (event.currentTarget as HTMLInputElement).value;
    setStudentId(parseInt(selectedStudentId));
  };

  return (
    <>
      <h1 className="text-lg font-semibold py-2">
        Hi, {user.name}!
      </h1>

      <h2 className="text-lg font-semibold py-2 text-left">My Students</h2>

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
              className=" w-full focus:ring-indigo-500 focus:border-indigo-500 flex-1 bg-green-50 py-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center py-2 px-4 my-4 border border-transparent
                         shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600
                         hover:bg-indigo-700 focus:outline-none focus:ring-2
                         focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
