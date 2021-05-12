import React, { useEffect, useState } from "react";
import { User } from "models/User";
import { StudentSelect } from "./StudentSelect";
import { Student } from "models/Student";

interface MeetingFormProps {
  authToken: string;
  user: User;
}

type StudentResponse = {
  students: Student[];
};

export const MeetingForm = ({
  authToken,
  user,
}: MeetingFormProps): JSX.Element => {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    async function getStudents(): Promise<StudentResponse> {
      const studentsResponse = await fetch("/students", {
        method: "GET",
        headers: {
          "X-AUTH-TOKEN": authToken,
        },
      });
      return await studentsResponse.json();
    }
    getStudents().then((studentResponse) => {
      setStudents(studentResponse.students);
    });
  }, []);

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <h2>Record Meeting</h2>
      <form>
        <StudentSelect options={students} />
      </form>
    </div>
  );
};
