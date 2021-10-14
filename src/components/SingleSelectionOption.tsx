import React from "react"

import { GetSurvey_survey_questions_options } from "graphql/queries/__generated__/GetSurvey"

interface SingleSelectionOptionProps {
  options: GetSurvey_survey_questions_options[]
}

export const SingleSelectionOption = ({ options }: SingleSelectionOptionProps): JSX.Element | null => {
  return (
    <section className="w-full text-gray-dark h-screen px-4 py-8">
      {options.map((option: GetSurvey_survey_questions_options) => {
        return (
          <p className="text-left">
            <input type="radio" name="options" id={option.id} value={option.label} />
            <label className="ml-2" htmlFor="options">{option.label}</label>
          </p>
        )}
      )}
    </section>
  )
}

