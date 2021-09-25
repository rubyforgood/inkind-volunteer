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

      {sessions?.map((session: Session) => {
        const name = `${session.student}`;
        const date = `${session.date}`;

        return (
          <>
            <div className="w-full inline-block text-left my-2 bg-green-50">
              <p className="block">{name}</p>
              <p className="block">
                {date}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};
