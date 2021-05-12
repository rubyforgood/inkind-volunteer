import React, { useState } from "react";
import { MeetingForm } from "components/MeetingForm";
import { User } from "models/User";
import "./App.css";
import { Login } from "./components/Login";

const App = (): JSX.Element => {
  const [authToken, setAuthToken] = useState("asdfsdf");
  const [user, setUser] = useState<User>();

  return (
    <div className="App">
      {authToken?.length && !!user ? (
        <MeetingForm authToken={authToken} user={user} />
      ) : (
        <Login setAuthToken={setAuthToken} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
