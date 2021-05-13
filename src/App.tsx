import React, { useState } from "react";
import { MeetingForm } from "components/MeetingForm";
import { User } from "models/User";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Login } from "./components/Login";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  const [authToken, setAuthToken] = useState("asdfsdf");
  const [user, setUser] = useState<User>();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {authToken?.length && !!user ? (
          <MeetingForm authToken={authToken} user={user} />
        ) : (
          <Login setAuthToken={setAuthToken} setUser={setUser} />
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
