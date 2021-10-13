import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import HomeIcon from "./home.svg"
import Person from "./person.svg"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard"
import { StudentShow } from "./StudentShow"
import { Account } from "./Account"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  return (
    <Router>
      <div className="bg-gray-lightest">
        <nav className="fixed inset-x-0 bottom-0 mx-auto border-t-1 border-gray-light shadow-md">
          <ul className="flex flex-row justify-around pt-4 pb-3 px-5 bg-white">
            <li>
              <Link to="/">
                <div className="flex flex-col items-center text-gray-dark">
                  <img src={String(HomeIcon,)} width="26px" height="24px" />
                  <small className="pt-1">Home</small>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <div className="flex flex-col items-center text-gray-dark">
                  <img src={String(Person,)} width="25px" height="25px" />
                  <small className="pt-1">Account</small>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
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
