import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface MultipleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[],
  onAnswer: any,
}

export const MultipleSelectionOption = ({ options, onAnswer }: MultipleSelectionOptionProps): JSX.Element | null => {
  const onSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value

    onAnswer((currentOptions: string) => {
      const currentOptionsSet = new Set(currentOptions)
      if (currentOptionsSet.has(selectedOption)) {
        currentOptionsSet.delete(selectedOption)
      } else {
        currentOptionsSet.add(selectedOption)
      }

      return Array.from(currentOptionsSet)
    })
  }

  return (
    <section className="w-full text-gray-dark h-screen px-4 py-8">
      {options.map((option: GetSurvey_survey_questions_options) => {
        return (
          <p className="text-left" key={option.id}>
            <input
                type="checkbox"
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

