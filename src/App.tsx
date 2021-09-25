import React, { useState } from "react";
import { WelcomeDashboard } from "components/WelcomeDashboard";

import { User } from "models/User";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Login } from "./components/Login";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  const [authToken, setAuthToken] = useState("asdfsdf");
  const [user, setUser] = useState<User>({
    firstName: "George",
    lastName: "Plimpton",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App p-9">
        {authToken?.length && !!user ? (
          <WelcomeDashboard authToken={authToken} user={user} />
        ) : (
          <Login setAuthToken={setAuthToken} setUser={setUser} />
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
