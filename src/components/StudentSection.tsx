import { Student } from "models/Student"
import { Avatar } from "./Avatar"
import React from "react"
interface StudentSectionProps {
  students: Student[];
}

export const StudentSection = ({
  students,
}: StudentSectionProps): JSX.Element => {
  const getAge = (date: Date) => {
    const today = new Date()
    const birthDate = new Date(date)
    const age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1
    }

    return age
  }

  return (
    <div>
      {students.map((student: Student) => {
        return (
          <React.Fragment key={student.id}>
            <div>
              <div className="flex flex-row w-full inline-block text-left my-2 p-4 leading-tight bg-white">
                <Avatar name={student.name} />
                <div className="inline-block flex flex-col ">
                  <p className="block font-semibold">{student.name}</p>
                  <p className="block text-xs">{`Age ${getAge(student.dateOfBirth)}`}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
