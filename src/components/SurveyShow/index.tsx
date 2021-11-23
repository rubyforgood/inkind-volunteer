import { useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useParams, useNavigate } from "react-router-dom"

import { CreateSurveyQuestionResponseMutation } from "graphql/mutations/CreateSurveyQuestionResponse"
import { CreateSupportTicketMutation } from "graphql/mutations/CreateSupportTicket"
import { GetSurveyResponseQuery } from "graphql/queries/GetSurveyResponse"
import { GetSurveyResponse, GetSurveyResponse_surveyResponse_survey_questions } from "graphql/queries/__generated__/GetSurveyResponse"

import { SurveyProgressBar } from "./SurveyProgressBar"
import { SingleSelectionOption } from "./SingleSelectionOption"
import { MultipleSelectionOption } from "./MultipleSelectionOption"
import { TextQuestion } from "./TextQuestion"

export const SurveyShow = (): JSX.Element | null => {
  const navigate = useNavigate()
  const [ answer, setAnswer ] = useState<[string] | string>()
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState<number>(0)
  const [ supportTicketQuestion, showSupportTicketQuestion ] = useState<boolean>(false)
  const { surveyResponseId, studentId } = useParams<'surveyResponseId' | 'studentId'>()
  const { data, loading } = useQuery<GetSurveyResponse>(GetSurveyResponseQuery, { variables: { id: surveyResponseId }})
  const [ createSurveyQuestionResponse ] = useMutation(CreateSurveyQuestionResponseMutation)
  const [ createSupportTicket ] = useMutation(CreateSupportTicketMutation)

  if (loading || !data) return null

  const { surveyResponse } = data
  const { questions } = surveyResponse.survey

  if (!questions) return null

  const currentQuestion = questions[currentQuestionIndex]

  const goToNextQuestion = (queueSupportTicket:boolean) => {
    if (queueSupportTicket) {
      showSupportTicketQuestion(true)
    } else if (currentQuestionIndex + 1 == questions.length) {
      navigate(`/student/${studentId}`)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setAnswer(undefined)
    }
  }

  const goToPreviousQuestion = () => {
    showSupportTicketQuestion(false)
    if(currentQuestionIndex == 0) {
      navigate(`/student/${studentId}`)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setAnswer(undefined)
    }
  }

  const onNext = () => {
    let reply, options
    let queueSupportTicket = false

    if (currentQuestion.type == "SurveyTextQuestion") {
      reply = answer
      options = []
    } else {
      reply = null
      options = answer
    }

    if (currentQuestion.type == "SurveySupportTicketQuestion") {
      queueSupportTicket = currentQuestion?.options?.find(option => option.id === answer)?.label === "Yes"
    }

    createSurveyQuestionResponse({
      variables: {
        surveyResponseId: surveyResponseId,
        questionId: currentQuestion.id,
        optionIds: options,
        reply: reply
      }
    })

    goToNextQuestion(queueSupportTicket)
  }

  const createTicket = () => {
    createSupportTicket({
      variables: {
        surveyResponseId: surveyResponseId,
        description: answer
      }
    })

    goToNextQuestion(false)
  }

  const onSupportTicketResponse = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value)
  }

  const renderQuestion = (question: GetSurveyResponse_surveyResponse_survey_questions) => {
    if (question.options && question.options.length > 0) {
      if (question.type == "SurveySingleSelectQuestion" || question.type == "SurveySupportTicketQuestion") {
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

      { supportTicketQuestion ?
        <>
          <p>{"Please describe the reason for this request in a few words:"}</p>

          <textarea
              rows={5}
              cols={33}
              placeholder="Enter your comments here."
              onChange={onSupportTicketResponse}
          />

          <div className="fixed bottom-20 inset-x-0 w-full grid grid-cols-2 gap-4 px-4 py-8">
            <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded" onClick={createTicket}>NEXT</button>
          </div>
        </>
        :
        <>
          <p>{currentQuestion.prompt}</p>

          {renderQuestion(currentQuestion)}

          <div className="fixed bottom-20 inset-x-0 w-full grid grid-cols-2 gap-4 px-4 py-8">
            <button className="bg-neutral-50 text-neutral-900 px-5 py-3 rounded" onClick={() => goToNextQuestion(false)}>SKIP</button>
            <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded" onClick={onNext}>NEXT</button>
          </div>
        </>
      }
    </section>
  )
}

