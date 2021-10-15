import { useState } from "react"
import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface MultipleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[],
  onAnswer: any,
  // onAnswer: (value: string[]) => void,
}

export const MultipleSelectionOption = ({ options, onAnswer }: MultipleSelectionOptionProps): JSX.Element | null => {
  const onSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedOption = event.target.value
    console.log(changedOption)
    onAnswer((currentOptions: any) => {
      console.log("currentOptions", currentOptions)
      const newOptions = currentOptions ? currentOptions : []

      // if (newOptions.include(changedOption)) {
        // newOptions.filter((item: string) => item != changedOption)
      // } else {
        newOptions.push(changedOption)
      // }

      console.log("newOptions:", newOptions)
      return newOptions
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

