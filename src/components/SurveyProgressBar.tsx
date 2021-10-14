import { GetSurvey_survey_questions } from "graphql/queries/__generated__/GetSurvey"

interface SurveyProgressBarProps {
  questions: GetSurvey_survey_questions[],
  currentQuestionIndex: number,
  goToPreviousQuestion: any,
}

export const SurveyProgressBar = ({ questions, currentQuestionIndex, goToPreviousQuestion }: SurveyProgressBarProps): JSX.Element => {
  return (
    <div className="text-neutral-600">
      <a  onClick={goToPreviousQuestion}>
        back
      </a>
      {`${currentQuestionIndex + 1} of ${questions.length}`}
      <div className="relative pt-1">
        <div className="overflow-hidden h-1 text-xs flex bg-neutral-200">
            <div style={{width: "30%"}}
                className="shadow-none flex flex-col whitespace-nowrap justify-center bg-primary-500">
            </div>
        </div>
      </div>
    </div>
  )
}
