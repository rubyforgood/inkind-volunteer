import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  return (
    <Router>
      <div>
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-2 border-gray-light">
          <ul className="flex flex-row justify-around p-5 bg-white">
            <li>
              <Link to="/">
                <div className="flex flex-col items-center text-gray-medium">
                  <FontAwesomeIcon
                      fixedWidth
                      icon={faHome}
                  />
                  Home
                </div>
              </Link>
            </li>
            <li>
              <div className="flex flex-col items-center text-gray-medium">
                <FontAwesomeIcon
                    fixedWidth
                    icon={faUser}
                />
                Account
              </div>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <WelcomeDashboard
                user={user}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
