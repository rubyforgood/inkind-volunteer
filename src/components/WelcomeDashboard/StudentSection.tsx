import React from "react"
import { Link } from "react-router-dom"

import { Student } from "models/Student"
import { getAge } from "utils/getAge"

import { UserItem } from "../partials/UserItem"

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
            <UserItem
                header={student.name}
                initials={student.initials}
                subHeader={`Age ${getAge(student.dateOfBirth)}`}
            />
          </Link>
        )
      })}
    </div>
  )
}
