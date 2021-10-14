import React from "react"

import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface SingleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[]
}

export const SingleSelectionOption = ({ options }: SingleSelectionOptionProps): JSX.Element | null => {
  return (
    <section className="w-full px-4 py-8 pt-8 text-gray-dark h-screen">
      {options.map((option: GetSurvey_survey_questions_options) => {
        return (
          <p>
            <label>{option.label}</label>
            <input type="radio" name="options" id={option.id} value={option.label} />
          </p>
        )}
      )}
    </section>
  )
}

