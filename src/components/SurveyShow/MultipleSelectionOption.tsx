import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface MultipleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[]
}

export const MultipleSelectionOption = ({ options }: MultipleSelectionOptionProps): JSX.Element | null => {
  return (
    <section className="w-full text-gray-dark h-screen px-4 py-8">
      {options.map((option: GetSurvey_survey_questions_options) => {
        return (
          <p className="text-left" key={option.id}>
            <input type="checkbox" name="options" id={option.id} value={option.label} />
            <label className="ml-2" htmlFor="options">{option.label}</label>
          </p>
        )}
      )}
    </section>
  )
}

