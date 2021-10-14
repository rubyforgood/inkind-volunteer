import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom"

import HomeIcon from "./icons/home.svg"
import HomeSelectedIcon from "./icons/homeSelected.svg"
import PersonIcon from "./icons/person.svg"
import PersonSelectedIcon from "./icons/personSelected.svg"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard/index"
import { StudentShow } from "./StudentShow"
import { SurveyShow } from "./SurveyShow"
import { Account } from "./Account"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {

  return (
    <Router>
      <div className="bg-gray-lightest h-screen">
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-1 border-gray-light shadow-md">
          <ul className="flex flex-row justify-around pt-4 pb-3 px-5 bg-white">
            <li>
              <Link to="/">
                <div className="flex flex-col items-center text-gray-dark">
                  <Route>
                      {({ location }: RouteProps) => location?.pathname == "/" ? (
                        <img src={String(HomeSelectedIcon,)} width="25px" height="25px" />
                      ) : (
                        <img src={String(HomeIcon,)} width="25px" height="25px" />
                      )}
                    </Route>
                  <small className="pt-1">Home</small>
                </div>
              </Link>
            </li>
            <li>
            <Link to="/account">
                <div className="flex flex-col items-center text-gray-dark">
                  <Route>
                    {({ location }: RouteProps) => location?.pathname == "/account" ? (
                      <img src={String(PersonSelectedIcon,)} width="25px" height="25px" />
                    ) : (
                      <img src={String(PersonIcon,)} width="25px" height="25px" />
                    )}
                  </Route>
                  <small className="pt-1">Account</small>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/student/:studentId/survey/:surveyId">
            <SurveyShow />
          </Route>
          <Route path="/student/:id">
            <StudentShow />
          </Route>
          <Route path="/" exact>
            <WelcomeDashboard
                user={user}
            />
          </Route>
          <Route path="/account" exact>
            <Account
                user={user}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
