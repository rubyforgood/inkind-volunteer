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
        return (
          <>
            <div className="w-full inline-block text-left my-2 bg-green-50 p-2">
              <div className="inline-block ">
                <input type="radio" value={student.id} key={student.id} className="mx-4 hidden" onChange={onChange} name="studentId" />
                <label className="block">
                  <img src="" className="text-center rounded-full bg-red-200 w-10 h-10 inline-block mr-3" />
                  {student.name}
                  <p className="text-xs block pl-12">{student.dateOfBirth}</p>
                </label>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
