import { Student } from "models/Student";
import React from "react";

interface StudentSelectProps {
  options: Student[];
}
export const StudentSelect = ({ options }: StudentSelectProps): JSX.Element => (
  <select>
    {options.map((student) => (
      <option value={student.firstName} />
    ))}
  </select>
);
