import { SurveyResponse } from "models/SurveyResponse"
import { Avatar } from "./Avatar"
import React from "react"
import { useQuery } from "@apollo/client"
import { GetSurveyResponsesQuery } from "graphql/queries/GetSurveyResponses"
import { QueryError } from "./QueryError"
import { GetSurveyResponses } from "graphql/queries/__generated__/GetSurveyResponses"

export const SessionSection = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetSurveyResponses>(GetSurveyResponsesQuery)
  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <div>
      <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>Recent Sessions</p>

      {data?.surveyResponses?.length === 0 &&
        <div className="flex content-around mt-4">
          <p className="text-lg font-semibold py-2 text-center rounded-full bg-red-200 w-64 h-64 pt-24  mx-auto">
            No Sessions
          </p>
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
                <Avatar name={name} />
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
