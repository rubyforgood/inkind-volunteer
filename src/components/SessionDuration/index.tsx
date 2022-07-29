import React, { useState } from "react"
import DatePicker from "react-datepicker"
import classnames from "classnames"
import { Controller, useForm } from "react-hook-form"

import "./style.scss"
import "react-datepicker/dist/react-datepicker.css"

import TimerIcon from "../icons/timer.svg"

interface DurationInput {
  date: Date | null;
  duration: string;
}

export const SessionDuration = (): JSX.Element => {
  const [showDurationInput, setShowDurationInput] = useState(false)
  const { control, register, handleSubmit, formState: { isValid } } = useForm<DurationInput>({ mode: "onChange" })

  const toggleShowDuration = () => setShowDurationInput(!showDurationInput)
  const onSubmit = (data: DurationInput) => console.log(data)

  const durationOptions = ["30", "45", "60", "75", "90"]

  return (
    <div className="text-center w-full flex items-center flex-col px-4 py-8 pt-8 text-neutral-600">
      <div className="w-full">
        <h1 className="text-lg py-2" style={{fontSize: "24px"}}>Enter Date and Time</h1>
        <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>Enter your session date and duration. Round up to the nearest 15 mins, if necessary.</p>
        <form
            className="h-screen"
            onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-4">
            <Controller
                control={control}
                name={"date"}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                      className="bg-white shadow appearance-none border rounded w-full py-4 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline mb-4"
                      onChange={(date) => field.onChange(date)}
                      placeholderText="Select date"
                      popperPlacement="auto"
                      selected={field.value}
                  />
                )}
            />
            <div className="bg-white shadow appearance-none border rounded w-full py-4 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline">
              <div onClick={toggleShowDuration}>
                <div className="flex flex-row justify-between">
                  <p>
                    Select session duration
                  </p>
                  <img
                      src={String(TimerIcon,)}
                      width="16px"
                      height="16px"
                  />
                </div>
              </div>
            </div>
            <div className={classnames("flex flex-col text-left", { hide: !showDurationInput }, { show: showDurationInput })}>
              {durationOptions.map(option => (
                <label
                    htmlFor={`field-${option}-mins`}
                    key={option}
                >
                  <input
                      className="my-4 mr-3"
                      id={`field-${option}-mins`}
                      type="radio"
                      value={`${option} minutes`}
                      {...register("duration", { required: true })}
                  />
                  {`${option} minutes`}
                </label>
              ))}
            </div>
          </div>
        
            <button
                className={`${isValid ? "bg-primary-500" : "bg-neutral-200"} text-white rounded py-3 px-20 bottom-10 submit-button`}
                disabled={isValid ? false : true}
                type="submit"
            >
              SUBMIT
            </button>
        </form>
      </div>
    </div>
  )
}
