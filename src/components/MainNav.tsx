import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard"

interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps): JSX.Element => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
