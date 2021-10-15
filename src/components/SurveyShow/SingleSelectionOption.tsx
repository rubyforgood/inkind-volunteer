import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface SingleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[],
  onAnswer: (value: string) => void,
}

export const SingleSelectionOption = ({ options, onAnswer }: SingleSelectionOptionProps): JSX.Element | null => {
  const onSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAnswer(event.target.value)
  }

  return (
    <section className="w-full text-gray-dark h-screen px-4 py-8">
      {options.map((option: GetSurvey_survey_questions_options) => {
        return (
          <p className="text-left" key={option.id}>
            <input
                type="radio"
                name="options"
                id={option.id}
                value={option.id}
                onChange={onSelectAnswer}
            />
            <label className="ml-2" htmlFor="options">{option.label}</label>
          </p>
        )}
      )}
    </section>
  )
}

