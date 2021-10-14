import { useState } from "react"
import { useQuery } from "@apollo/client"
import { useParams, useHistory } from "react-router-dom"

import { GetSurveyQuery } from "graphql/queries/GetSurvey"
import { GetSurvey, GetSurvey_survey_questions } from "graphql/queries/__generated__/GetSurvey"

import { SurveyProgressBar } from "./SurveyProgressBar"
import { SingleSelectionOption } from "./SingleSelectionOption"
import { MultipleSelectionOption } from "./MultipleSelectionOption"
import { TextQuestion } from "./TextQuestion"
interface SurveyShowProps {
  surveyId: string,
  studentId: string,
}

export const SurveyShow = (): JSX.Element | null => {
  const history = useHistory()
  const [currentQuestionIndex, setCurrentQuestionIndex ] = useState<number>(0)
  const { surveyId, studentId } = useParams<SurveyShowProps>()
  const { data, loading } = useQuery<GetSurvey>(GetSurveyQuery, { variables: { id: surveyId }})

  if (loading || !data) return null

  const { questions } = data.survey

  if (!questions) return null

  const currentQuestion = questions[currentQuestionIndex]

  const onSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const onNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const renderQuestion = (question: GetSurvey_survey_questions) => {
    if (question.options && question.options.length > 0) {
      if (question.type == "SurveySingleSelectQuestion") {
        return <SingleSelectionOption options={question.options} />
      }
      if (question.type == "SurveyMultiSelectQuestion") {
        return <MultipleSelectionOption options={question.options} />
      }
    } else {
      return <TextQuestion />
    }
  }

  const goToPreviousQuestion = () => {
    if(currentQuestionIndex == 0) {
      history.push(`/student/${studentId}`)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
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
        <button className="bg-neutral-50 text-neutral-900 px-5 py-3 rounded" onClick={onSkip}>SKIP</button>
        <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded" onClick={onNext}>NEXT</button>
      </div>
    </section>
  )
}

