import { Student } from "models/Student";
import React from "react";

interface StudentSelectProps {
  students: Student[];
}

export const StudentSelect = ({
  students,
}: StudentSelectProps): JSX.Element => {
  return (
    <select>
      {students.map((student: Student) => {
        const fullName = `${student.firstName} ${student.lastName}`;

        return (
          <option value={fullName} key={fullName}>
            {fullName}
          </option>
        );
      })}
    </select>
  );
};
