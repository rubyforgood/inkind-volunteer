import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { Controller, useForm } from "react-hook-form"

import "./style.scss"
import "react-datepicker/dist/react-datepicker.css"

import TimerIcon from "../icons/timer.svg"

interface ScheduleInput {
  date: Date | null;
  duration: string;
}

export const SessionScheduler = (): JSX.Element => {
  const [showDurationInput, setShowDurationInput] = useState(false)
  const [selectedDuration, setSelectedDuration] = useState<string>("Select session duration")
  const { control, register, handleSubmit, formState: { errors } } = useForm<ScheduleInput>()

  const toggleShowDuration = () => setShowDurationInput(!showDurationInput)
  const onSubmit = (data: ScheduleInput) => console.log(data)

  return (
    <div className="text-center w-full flex items-center flex-col px-4 py-8 pt-8 text-neutral-600">
      <div className="w-full">
        <h1 className="text-lg py-2" style={{fontSize: "24px"}}>Enter Date and Time</h1>
        <p className="text-lg py-2 text-left" style={{fontSize: "20px"}}>Enter your session date and duration. Round up to the nearest 15 mins, if necessary.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <Controller
                control={control}
                name={"date"}
                render={({ field }) => (
                  <DatePicker
                      className="mb-4 shadow appearance-none border rounded w-full py-4 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
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
            {showDurationInput && (
              <>
                <div className="flex flex-col text-left">
                  <label htmlFor="field-30-mins">
                    <input
                        className="my-4 mr-3"
                        id="field-30-mins"
                        type="radio"
                        value="30 minutes"
                        {...register("duration")}
                    />
                    30 minutes
                  </label>
                  <label htmlFor="field-60-mins">
                      <input
                          className="my-4 mr-3"
                          id="field-60-mins"
                          type="radio"
                          value="60 minutes"
                          {...register("duration")}
                      />
                      60 minutes
                  </label>
                  <label htmlFor="field-90-mins">
                      <input
                          className="my-4 mr-3"
                          id="field-90-mins"
                          type="radio"
                          value="90 minutes"
                          {...register("duration")}
                      />
                      90 minutes
                  </label>
                  <label htmlFor="field-other">
                      <input
                          className="my-4 mr-3"
                          id="field-other"
                          type="radio"
                          value="other"
                          {...register("duration")}
                      />
                      Other
                  </label>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}


