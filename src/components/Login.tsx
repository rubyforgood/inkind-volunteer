import { useState } from "react"
import { useMutation } from "@apollo/client"
import { setToken } from "lib/authentication"

import { SignInMutation } from "graphql/mutations/SignInMutation"

export const Login = (): JSX.Element => {
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
      setToken(signInUser.token)
      client.clearStore()
      window.location.reload()
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
    <section className="text-center h-screen w-full flex justify-center items-center bg-gradient-to-b from-login-gradient-top via-login-gradient-middle to-login-gradient-bottom">
      <div className="w-full max-w-md">
        <h2 className="mt-6 text-center text-5xl mb-6 font-extrabold font-tenor uppercase text-white">
          InKind
        </h2>

        <form className="px-2 py-8 pt-8">
          <div className="px-2 pb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="appearance-none rounded w-full p-4 text-gray-600 placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-primary-100"
              placeholder="Email address"
              onBlur={(event: React.FormEvent) =>
                setUserEmail((event.currentTarget as HTMLInputElement).value)
              }
            />
          </div>
          <div className="px-2 pb-4">
            <input
              type="password"
              name="password"
              id="password"
              className="appearance-none rounded w-full p-4 text-gray-600 placeholder-gray-500 leading-tight focus:outline-none focus:shadow-outline bg-primary-100"
              placeholder="Password"
              onBlur={(event: React.FormEvent) =>
                setPassword((event.currentTarget as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <button
              className="py-3 px-10 mt-8 shadow rounded focus:outline-none focus:shadow-outline uppercase bg-neutral-50"
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
