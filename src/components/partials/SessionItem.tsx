import { SurveyResponse } from "models/SurveyResponse"
import { StudentSurveyResponse } from "models/StudentSurveyResponse"

import { UserItem } from "./UserItem"

interface SessionItemProps {
  response: SurveyResponse | StudentSurveyResponse,
}

export const SessionItem = ({ response }: SessionItemProps): JSX.Element => {
  const name = `${response.student.name}`
  const date = new Date(response?.meetingDuration?.startedAt || "2021")
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`

  return (
    <UserItem
        header={name}
        initials={response.student.initials}
        key={response.id}
        subHeader={formattedDate}
    />
  )
}
