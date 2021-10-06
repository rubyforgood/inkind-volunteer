import { useMutation } from "@apollo/client"
import { SignInMutation } from "graphql/mutations/SignInMutation"
import { User } from "models/User"
import React, { useState } from "react"

interface LoginProps {
  setUser: (arg: User) => void;
}

export const Login = ({ setUser }: LoginProps): JSX.Element => {
  const [userEmail, setUserEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [login, { client, error }] = useMutation(SignInMutation, {
    variables: {
      credentials: {
        email: userEmail,
        password: password,
      },
    },
    onCompleted: ({ signInUser }) => {
      setUser(signInUser.user)
      client.clearStore()
    },
    onError: (error) => {
      console.error("[failed login]", error)
    },
  })

  if (error) {
    return (
      <p>
        Error!
        <pre>{JSON.stringify(error.clientErrors, null, "  ")}</pre>
      </p>
    )
  }

  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
              onBlur={(event: React.FormEvent) =>
                setUserEmail((event.currentTarget as HTMLInputElement).value)
              }
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
              onBlur={(event: React.FormEvent) =>
                setPassword((event.currentTarget as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => login()}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
