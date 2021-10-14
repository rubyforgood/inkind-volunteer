import { GetSurvey_survey_questions } from "graphql/queries/__generated__/GetSurvey"
import Vector from "./icons/vector.svg"

interface SurveyProgressBarProps {
  questions: GetSurvey_survey_questions[],
  currentQuestionIndex: number,
  goToPreviousQuestion: () => void,
}

export const SurveyProgressBar = ({ questions, currentQuestionIndex, goToPreviousQuestion }: SurveyProgressBarProps): JSX.Element => {
  const progress = ((currentQuestionIndex + 1)/ questions.length) * 100
  return (
    <div className="text-neutral-600">
      <div className="flex justify-between">
        <a onClick={goToPreviousQuestion}>
          <img src={String(Vector,)} width="10px" height="10px" />
        </a>
        <span>
          {`${currentQuestionIndex + 1} of ${questions.length}`}
        </span>
        <span />
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-1 text-xs flex bg-neutral-200">
            <div style={{width: `${progress}%`}}
                className="shadow-none flex flex-col whitespace-nowrap justify-center bg-primary-500">
            </div>
        </div>
      </div>
    </div>
  )
}
