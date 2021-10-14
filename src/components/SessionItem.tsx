import React from "react"

import { SurveyResponse } from "models/SurveyResponse"
import { StudentSurveyResponse } from "models/StudentSurveyResponse"
import { Avatar } from "./Avatar"

interface SessionItemProps {
  response: SurveyResponse | StudentSurveyResponse,
}

export const SessionItem = ({ response }: SessionItemProps): JSX.Element => {
  const name = `${response.student.name}`
  const date = new Date(response?.meetingDuration?.startedAt || "2021")
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <React.Fragment key={response.id}>
      <div>
        <div className="flex flex-row w-full inline-block text-left my-1 p-4 leading-tight bg-white rounded-md">
          <Avatar initials={response.student.initials} />
          <div className="inline-block flex flex-col">
            <p className="block font-semibold">{name}</p>
            <p className="block text-xs">{formattedDate}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
