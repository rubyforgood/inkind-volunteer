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
import { SessionScheduler } from "./SessionScheduler/index"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  const homeIcon = () => {
    if (window.location.pathname == "/") {
      return <img src={String(HomeSelectedIcon,)} width="25px" height="25px" />
    } else {
      return <img src={String(HomeIcon,)} width="25px" height="25px" />
    }
  }

  const accountIcon = () => {
    if (window.location.pathname.startsWith("/account")) {
      return <img src={String(PersonSelectedIcon,)} width="25px" height="25px" />
    } else {
      return <img src={String(PersonIcon,)} width="25px" height="25px" />
    }
  }

  return (
    <Router>
      <div className="bg-gray-lightest h-screen">
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-1 border-gray-light shadow-md">
          <ul className="flex flex-row justify-around pt-4 pb-3 px-5 bg-white">
            <li>
              <Link to="/">
                <div className="flex flex-col items-center text-gray-dark">
                  {homeIcon()}
                  <small className="pt-1">Home</small>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <div className="flex flex-col items-center text-gray-dark">
                  {accountIcon()}
                  <small className="pt-1">Account</small>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
              element={<SessionScheduler />}
              path="/student/:studentId/survey/:surveyResponseId/schedule"
          />
          <Route
              element={<SurveyShow />}
              path="/student/:studentId/survey/:surveyResponseId"
          />
          <Route
              element={<StudentShow />}
              path="/student/:id"
          />
          <Route
              element={<WelcomeDashboard user={user} />}
              path="/"
          />
          <Route
              element={<Account user={user} />}
              path="/account"
          />
          <Route
              element={<EditAccount user={user} />}
              path="/account/edit"
          />
          <Route
              element={<EditAccountPassword user={user} />}
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
