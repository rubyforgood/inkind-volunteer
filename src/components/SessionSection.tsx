import { SurveyResponse } from "models/SurveyResponse"
import { Avatar } from "./Avatar"
import React from "react"
import { useQuery } from "@apollo/client"
import { GetSurveyResponsesQuery } from "graphql/queries/GetSurveyResponses"
import { QueryError } from "./QueryError"
import { GetSurveyResponses } from "graphql/queries/__generated__/GetSurveyResponses"
import NoSessionSVG from "./noSessions.svg"

export const SessionSection = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetSurveyResponses>(GetSurveyResponsesQuery)
  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <div className="pb-20 bg-gray-lightest">
      <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>Recent Sessions</p>
      {data?.surveyResponses?.length === 3 &&
        <div className="flex flex-col text-left mt-4 bg-gray-lightest">
          <p style={{fontSize: "16px"}}>
            You haven't completed a session survey yet! <br />
            Log a session now!
          </p>
          <div className="bg-gray-lightest">
            <img src={String(NoSessionSVG,)} width="311px" className={"mt-4 items-center"} />
          </div>
        </div>
      }

      {data?.surveyResponses?.map((response: SurveyResponse) => {
        const name = `${response.student.name}`
        const date = new Date(response!.meetingDuration!.startedAt)
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
      })}
    </div>
  )
}
