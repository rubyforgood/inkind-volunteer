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
    <div>
      {students.map((student: Student) => {
        const fullName = `${student.firstName} ${student.lastName}`;

        return (
          <>
            <div className="w-full inline-block text-left my-2 bg-green-50">
              <input type="radio" value={student.id} key={student.id} className="mx-4" onChange={onChange} name="studentId" />
              <label className="inline-block">
                {fullName}
              </label>
            </div>
          </>
        );
      })}
    </div>
  );
};
