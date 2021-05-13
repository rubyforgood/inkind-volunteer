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
    <section className="App h-screen w-full flex justify-center items-center bg-blue-500">
      <div className="w-full max-w-md bg-gray-800">
        <div className="bg-white shadow-md rounded px-8 py-8 pt-8">
          <h1>
            Welcome, {user.firstName} {user.lastName}!
          </h1>
          <div className="px-4 py-4 space-y-8 w-128">
            <Formik
              initialValues={{ studentId: null, meetingDate: meetingDate }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <fieldset>
                    <StudentSelect
                      onChange={onStudentChange}
                      students={students}
                    />
                    <div>
                      <label htmlFor="meetingDate">Met on:</label>
                      <input
                        value={meetingDate}
                        name="meetingDate"
                        id="meeting-date"
                        type="date"
                        onBlur={handleBlur}
                        onChange={(event) => setMeetingDate(event.target.value)}
                      />
                    </div>
                  </fieldset>
                  <button type="submit" disabled={isSubmitting}>
                    Record Meeting
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};
