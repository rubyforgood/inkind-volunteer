import React from "react"
import { useQuery } from "@apollo/client"

import { SurveyResponse } from "models/SurveyResponse"
import { GetSurveyResponsesQuery } from "graphql/queries/GetSurveyResponses"
import { GetSurveyResponses } from "graphql/queries/__generated__/GetSurveyResponses"

import { QueryError } from "../partials/QueryError"
import NoSessionSVG from "./noSessions.svg"
import { SessionItem } from "../partials/SessionItem"

export const SessionSection = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetSurveyResponses>(GetSurveyResponsesQuery)
  if (loading) { return <div>Loading ....</div> }
  if (error) { return <QueryError error={error} /> }

  return (
    <div className="pb-20 bg-gray-lightest">
      <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>Recent Sessions</p>
      {data?.surveyResponses?.length === 0 &&
        <div className="flex flex-col text-left mt-4 bg-gray-lightest">
          <p style={{fontSize: "16px"}}>
            You haven't completed a session survey yet! <br />
            Log a session now!
          </p>
          <div className="bg-gray-lightest">
            <img src={String(NoSessionSVG,)} width="552px" className={"m-4"} style={{margin: "auto"}}/>
          </div>
        </div>
      }

      {data?.surveyResponses?.map((response: SurveyResponse) => (
        <SessionItem
            key={response.id}
            response={response}
        />
      ))}
    </div>
  )
}
