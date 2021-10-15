import { useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useParams, useHistory } from "react-router-dom"

import { CreateSurveyQuestionResponseMutation } from "graphql/mutations/CreateSurveyQuestionResponse"

import { GetSurveyResponseQuery } from "graphql/queries/GetSurveyResponse"
import { GetSurveyResponse, GetSurveyResponse_surveyResponse_survey_questions } from "graphql/queries/__generated__/GetSurveyResponse"

import { SurveyProgressBar } from "./SurveyProgressBar"
import { SingleSelectionOption } from "./SingleSelectionOption"
import { MultipleSelectionOption } from "./MultipleSelectionOption"
import { TextQuestion } from "./TextQuestion"

interface SurveyShowProps {
  surveyResponseId: string,
  studentId: string,
}

export const SurveyShow = (): JSX.Element | null => {
  const history = useHistory()
  const [ answer, setAnswer ] = useState<[string] | string>()
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState<number>(0)
  const { surveyResponseId, studentId } = useParams<SurveyShowProps>()
  const { data, loading } = useQuery<GetSurveyResponse>(GetSurveyResponseQuery, { variables: { id: surveyResponseId }})
  const [ createSurveyQuestionResponse ] = useMutation(CreateSurveyQuestionResponseMutation)

  if (loading || !data) return null

  const { surveyResponse } = data
  const { questions } = surveyResponse.survey

  if (!questions) return null

  const currentQuestion = questions[currentQuestionIndex]

  const goToNextQuestion = () => {
    if(currentQuestionIndex + 1 == questions.length) {
      history.push(`/student/${studentId}`)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setAnswer(undefined)
    }
  }

  const goToPreviousQuestion = () => {
    if(currentQuestionIndex == 0) {
      history.push(`/student/${studentId}`)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setAnswer(undefined)
    }
  }

  const onNext = () => {
    let reply, options

    if (currentQuestion.type == "SurveyTextQuestion") {
      reply = answer
      options = []
    } else {
      reply = null
      options = answer
    }
    createSurveyQuestionResponse({
      variables: {
        surveyResponseId: surveyResponseId,
        questionId: currentQuestion.id,
        optionIds: options,
        reply: reply
      }
    })

    goToNextQuestion()
  }

  const renderQuestion = (question: GetSurveyResponse_surveyResponse_survey_questions) => {
    if (question.options && question.options.length > 0) {
      if (question.type == "SurveySingleSelectQuestion") {
        return <SingleSelectionOption options={question.options} onAnswer={setAnswer} />
      }
      if (question.type == "SurveyMultiSelectQuestion") {
        return <MultipleSelectionOption options={question.options} onAnswer={setAnswer} />
      }
    } else {
      return <TextQuestion onAnswer={setAnswer} />
    }
  }

  return (
    <section className="w-full px-4 py-8 pt-8 text-gray-dark h-screen">
      <SurveyProgressBar
          goToPreviousQuestion={goToPreviousQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
      />

      <p>{currentQuestion.prompt}</p>

      {renderQuestion(currentQuestion)}

      <div className="fixed bottom-20 inset-x-0 w-full grid grid-cols-2 gap-4 px-4 py-8">
        <button className="bg-neutral-50 text-neutral-900 px-5 py-3 rounded" onClick={goToNextQuestion}>SKIP</button>
        <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded" onClick={onNext}>NEXT</button>
      </div>
    </section>
  )
}

