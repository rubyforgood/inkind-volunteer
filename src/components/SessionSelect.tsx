import { SurveyResponse } from "models/SurveyResponse"
import React from "react"
import { useQuery } from "@apollo/client"
import { GetSurveyResponsesQuery } from "graphql/queries/GetSurveyResponses"
import { QueryError } from "QueryError"
import { GetSurveyResponses } from "graphql/queries/__generated__/GetSurveyResponses"

export const SessionSelect = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetSurveyResponses>(GetSurveyResponsesQuery)
  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <div>
      <p className="text-lg font-semibold py-2 text-left">Recent Sessions</p>

      {data?.surveyResponses?.length === 0 &&
        <div className="flex content-around mt-4">
          <p className="text-lg font-semibold py-2 text-center rounded-full bg-red-200 w-64 h-64 pt-24  mx-auto">
            No Sessions
          </p>
        </div>
      }

      {data?.surveyResponses?.map((response: SurveyResponse) => {
        const name = `${response.student.name}`
        const date = `${response?.meetingDuration?.startedAt}`

        return (
          <React.Fragment key={response.id}>
            <div className="px-2">
              <div className="w-full flex flex-row inline-block text-left my-2 shadow border rounded py-2 px-3 text-gray-700 leading-tight border-blue-300 bg-blue-50">
                <img src="" className="text-center rounded-full bg-red-200 w-10 h-10 inline-block mr-3 inline-block" />
                <div className="inline-block flex flex-col">
                  <p className="block">{name}</p>
                  <p className="block text-xs">{date}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
