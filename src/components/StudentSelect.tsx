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
            <div className="px-2">
              <div className="w-full inline-block text-left my-2 shadow border rounded py-2 px-3 text-gray-700 leading-tight border-green-300 bg-green-50">
                <div className="inline-block ">
                  <input type="radio" value={student.id} key={student.id} className="mx-4 hidden" onChange={onChange} name="studentId" />
                  <label className="block">
                    <img src="" className="text-center rounded-full bg-red-200 w-10 h-10 inline-block mr-3" />
                    {student.name}
                    <p className="text-xs block pl-12">{student.dateOfBirth}</p>
                  </label>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
