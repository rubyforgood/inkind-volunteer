import React from "react"
import { Link } from "react-router-dom"

import { Student } from "models/Student"
import { Avatar } from "../partials/Avatar"
import { getAge } from "utils/getAge"

interface StudentSectionProps {
  students: Student[];
}

export const StudentSection = ({
  students,
}: StudentSectionProps): JSX.Element => {
  return (
    <div className="mb-5">
      {students.map((student: Student) => {
        return (
          <Link to={`/student/${student.id}`} key={student.id}>
            <div>
              <div className="flex flex-row w-full inline-block text-left my-1 p-4 leading-tight bg-white rounded-md">
                <Avatar initials={student.initials} />
                <div className="inline-block flex flex-col">
                  <p className="block font-semibold">{student.name}</p>
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
