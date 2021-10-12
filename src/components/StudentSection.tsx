import React from "react"
import { Link } from "react-router-dom"

import { Student } from "models/Student"
import { Avatar } from "./Avatar"
import { getAge } from "utils/getAge"

interface StudentSectionProps {
  students: Student[];
}

export const StudentSection = ({
  students,
}: StudentSectionProps): JSX.Element => {
  return (
    <div>
      {students.map((student: Student) => {
        return (
          <Link to={`/student/${student.id}`} key={student.id}>
            <div className="px-2">
              <div className="flex flex-row w-full inline-block text-left my-2 shadow border rounded py-2 px-3 text-gray-700 leading-tight border-green-300 bg-green-50">
                <Avatar name={student.name} />
                <div className="inline-block flex flex-col ">
                  <p className="block">{student.name}</p>
                  <p className="block text-xs">{`Age ${getAge(student.dateOfBirth)}`}</p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
