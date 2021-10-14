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
          <p className="text-left">
            <input type="radio" name="options" id={option.id} value={option.label} />
            <label className="ml-2" htmlFor="options">{option.label}</label>
          </p>
        )}
      )}

      <div className="grid grid-cols-2 gap-4 my-4">
        <button className="bg-neutral-50 text-neutral-900 px-5 py-3 rounded">SKIP</button>
        <button className="bg-primary-500 text-neutral-50 px-5 py-3 rounded">NEXT</button>
      </div>
    </section>
  )
}

