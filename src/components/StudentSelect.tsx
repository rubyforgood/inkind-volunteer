import { Student } from "models/Student";
import React from "react";

interface StudentSelectProps {
  students: Student[];
  onChange: (e: React.ChangeEvent) => void;
}

export const StudentSelect = ({
  students,
  onChange,
}: StudentSelectProps): JSX.Element => {
  return (
    <select onChange={onChange} name="studentId">
      {students.map((student: Student) => {
        const fullName = `${student.firstName} ${student.lastName}`;

        return (
          <option value={student.id} key={student.id}>
            {fullName}
          </option>
        );
      })}
    </select>
  );
};
