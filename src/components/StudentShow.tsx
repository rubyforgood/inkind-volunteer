import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { GetStudentQuery } from "graphql/queries/GetStudent"
import { GetStudent } from "graphql/queries/__generated__/GetStudent"

interface StudentShowProps {
  id: string
}

export const StudentShow = (): JSX.Element => {
  const { id } = useParams<StudentShowProps>()
  const { data } = useQuery<GetStudent>(GetStudentQuery, { variables: { id }})
  console.log("id: ", id)
  console.log("data: ", data)
  return (
    <div>
      "Hello"
    </div>
  )
}

