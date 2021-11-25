import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom"

import HomeIcon from "./icons/home.svg"
import HomeSelectedIcon from "./icons/homeSelected.svg"
import PersonIcon from "./icons/person.svg"
import PersonSelectedIcon from "./icons/personSelected.svg"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard/index"
import { StudentShow } from "./StudentShow"
import { SurveyShow } from "./SurveyShow/index"
import { Account } from "./Account"
import { EditAccount } from "./EditAccount"
import { EditAccountPassword } from "./EditAccountPassword"
import { EditAccountSuccess } from "./EditAccountSuccess"
import { SessionDuration } from "./SessionDuration/index"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  const [filledHomeIcon, fillHomeIcon] = useState<boolean>(false)
  const [filledAccountIcon, fillAccountIcon] = useState<boolean>(false)

  useEffect(() => {
    if (!(window.location.pathname == "/")) {
      fillHomeIcon(false)
    }

    if (!(window.location.pathname.startsWith("/account"))) {
      fillAccountIcon(false)
    }
  })

  return (
    <Router>
      <div className="bg-gray-lightest h-screen">
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-1 border-gray-light shadow-md">
          <ul className="flex flex-row justify-around pt-4 pb-3 px-5 bg-white">
            <li>
              <Link
                  onClick={() => fillHomeIcon(true)}
                  to="/"
              >
                <div className="flex flex-col items-center text-gray-dark">
                  { filledHomeIcon ? (
                      <img src={String(HomeSelectedIcon,)} width="25px" height="25px" />
                    ) : (
                      <img src={String(HomeIcon,)} width="25px" height="25px" />
                    )
                  }
                  <small className="pt-1">Home</small>
                </div>
              </Link>
            </li>
            <li>
              <Link
                  onClick={() => fillAccountIcon(true)}
                  to="/account"
              >
                <div className="flex flex-col items-center text-gray-dark">
                  { filledAccountIcon ? (
                      <img src={String(PersonSelectedIcon,)} width="25px" height="25px" />
                    ) : (
                      <img src={String(PersonIcon,)} width="25px" height="25px" />
                    )
                  }
                  <small className="pt-1">Account</small>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
              element={<SessionDuration />}
              path="/student/:studentId/survey/:surveyResponseId/duration"
          />
          <Route
              element={<SurveyShow />}
              path="/student/:studentId/survey/:surveyResponseId"
          />
          <Route
              element={<StudentShow fillHomeIcon={fillHomeIcon} />}
              path="/student/:id"
          />
          <Route
              element={<WelcomeDashboard user={user} fillHomeIcon={fillHomeIcon} />}
              path="/"
          />
          <Route
              element={<Account user={user} fillAccountIcon={fillAccountIcon} />}
              path="/account"
          />
          <Route
              element={<EditAccount user={user} fillAccountIcon={fillAccountIcon} />}
              path="/account/edit"
          />
          <Route
              element={<EditAccountPassword user={user} fillAccountIcon={fillAccountIcon} />}
              path="/account/edit-password"
          />
          <Route
              element={<EditAccountSuccess />}
              path="/account/edit/success"
          />
        </Routes>
      </div>
    </Router>
  )
}
