import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { GetSurveyQuery } from "graphql/queries/GetSurvey"
import { GetSurvey, GetSurvey_survey_questions } from "graphql/queries/__generated__/GetSurvey"

import { SingleSelectionOption } from "./SingleSelectionOption"
import { MultipleSelectionOption } from "./MultipleSelectionOption"
interface SurveyShowProps {
  surveyId: string
}


export const SurveyShow = (): JSX.Element | null => {
  const [currentQuestionIndex, setCurrentQuestionIndex ] = useState<number>(0)
  const { surveyId } = useParams<SurveyShowProps>()
  const { data, loading } = useQuery<GetSurvey>(GetSurveyQuery, { variables: { id: surveyId }})

  if (loading || !data) return null

  const { questions } = data.survey
  console.log(questions)

  if (!questions) return null

  const currentQuestion = questions[currentQuestionIndex]

  const onSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const renderQuestion = (question: GetSurvey_survey_questions) => {
    if (question.options) {
      if (question.type == "SurveySingleSelectQuestion") {
        return <SingleSelectionOption options={question.options} />
      }
      if (question.type == "SurveyMultiSelectQuestion") {
        return <MultipleSelectionOption options={question.options} />
      }
    }
  }

  return (
    <section className="w-full px-4 py-8 pt-8 text-gray-dark h-screen">
      <p>{currentQuestion.prompt}</p>

      {renderQuestion(currentQuestion)}

      <div className="fixed bottom-20 inset-x-0 w-full grid grid-cols-2 gap-4 px-4 py-8">
        <button className="bg-neutral-50 text-neutral-900 px-5 py-3 rounded" onClick={onSkip}>SKIP</button>
        <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded" onClick={onNext}>NEXT</button>
      </div>
    </section>
  )
}

