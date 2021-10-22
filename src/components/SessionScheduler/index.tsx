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
  const [selectedDate, setSelectedDate] = useState(null)
  const [sessionDuration, setSessionDuration] = useState("Select session duration")
  const { control, register, handleSubmit, formState: { errors } } = useForm<ScheduleInput>()

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
              <div className="flex flex-row justify-between">
                <p>
                  {sessionDuration}
                </p>
                <img
                    src={String(TimerIcon,)}
                    width="16px"
                    height="16px"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}