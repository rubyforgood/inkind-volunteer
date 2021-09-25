import { Session } from "models/Session";
import React from "react";
interface SessionSelectProps {
  sessions: Session[];
}

export const SessionSelect = ({
  sessions,
}: SessionSelectProps): JSX.Element => {
  return (
    <div>
      <p className="text-lg font-semibold py-2 text-left">Recent Sessions</p>

      {sessions.length === 0 &&
        <div className="flex content-around mt-4">
          <p className="text-lg font-semibold py-2 text-center rounded-full bg-red-200 w-64 h-64 pt-24  mx-auto">
            No Sessions
          </p>
        </div>
      }

      {sessions?.map((session: Session) => {
        console.log(sessions.length)
        const name = `${session.student}`;
        const date = `${session.date}`;

        return (
          <>
            <div className="w-full text-left my-2 bg-blue-50 p-2">
              <img src="" className="text-center rounded-full bg-red-200 w-10 h-10 inline-block mr-3 inline-block" />
              <div className="inline-block">
                <p className="block">{name}</p>
                <p className="block text-xs">{date}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
