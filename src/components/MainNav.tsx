import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { User } from "models/User"

import { WelcomeDashboard } from "./WelcomeDashboard"
import { StudentShow } from "./StudentShow"

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
          <Route path="/student/:id">
            <StudentShow />
          </Route>
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
