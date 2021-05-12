import { User } from "models/User";
import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";

const App = (): JSX.Element => {
  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className="App">
      {authToken.length ? (
        <MeetingForm authToken={authToken} user={user} />
      ) : (
        <Login setAuthToken={setAuthToken} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
