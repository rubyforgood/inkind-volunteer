// @ts-nocheck
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { QueryClient, QueryClientProvider } from "react-query"
import { MockedProvider } from '@apollo/client/testing'
import { Landing } from "components/Landing"
import { GetCurrentUser } from "graphql/queries/GetCurrentUser"
import { SignInMutation } from "graphql/mutations/SignInMutation"
import { GetStudentsQuery } from "graphql/queries/GetStudents"
import { GetSurveyResponsesQuery } from "graphql/queries/GetSurveyResponses"

const mocksAuthenticated = [
  {
    request: {
      query: GetCurrentUser,
    },
    result: {
      data: {
        currentUser: {
          id: 1,
          name: "Violet Volunteer",
          firstName: "Violet",
          lastName: "Volunteer",
          phoneNumber: "111-222-3333",
          email: "volunteer@cep.dev",
          initials: "VV",
          role: "volunteer",
        },
      }
    },
  }, {
    request: {
      query: GetStudentsQuery,
    },
    result: {
      data: {
        students: [
          {
            id: 1,
            dateOfBirth: "03/22/07",
            email: "joe@cep.ngo",
            name: "Joe Student",
            initials: "JS",
            createdAt: "2021-10-12 15:00:00",
            updatedAt: "2021-10-12 15:00:00"
          },
          {
            id: 2,
            dateOfBirth: "10/19/08",
            email: "jane@cep.ngo",
            name: "Jane Student",
            initials: "JS",
            createdAt: "2021-10-12 15:00:00",
            updatedAt: "2021-10-12 15:00:00"
          },
        ],
      }
    }
  }, {
    request: {
      query: GetSurveyResponsesQuery
    },
    result: {
      data: {
        surveyResponses: [
          {
            id: 1,
            student: {
              name: "Joe Session",
              initials: "JS",
            },
            volunteer: {
              id: 1,
              name: "Volunteer",
              initials: "VV",
            },
            meetingDuration: {
              minutes: 29,
              startedAt: "2021-10-13- 08:31:47",
            }
          },
          {
            id: 2,
            student: {
              name: "Jane Session",
              initials: "JS",
            },
            volunteer: {
              id: 1,
              name: "Volunteer",
              initials: "VV",
            },
            meetingDuration: {
              minutes: 27,
              startedAt: "2021-10-13- 09:50:23",
            }
          },
        ]
      }
    }
  }
]

const mocksAnonymous = [
  {
    request: {
      query: GetCurrentUser,
    },
    result: {
      data: {
        currentUser: null
      }
    },
  }, {
    request: {
      query: SignInMutation,
      variables: {
        credentials: {
          email: "volunteer@cep.dev",
          password: "password",
        }
      },
    },
    result: {
      data: {
        signInUser: {
          user: {
            id: 1,
            name: "Volunteer",
            email: "volunteer@cep.dev",
          },
          token: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        }
      }
    }
  },
]

test("user logs in", async () => {
  const location: Location = window.location;

  delete window.location;

  window.location = {
      ...location,
      reload: jest.fn()
  };

  render(
    <MockedProvider mocks={mocksAnonymous} addTypename={false}>
      <QueryClientProvider client={new QueryClient()}>
        <Landing />
      </QueryClientProvider>
    </MockedProvider>
  )

  // Loading State
  await waitFor(() => {
    expect(screen.getByText(/loading.../)).toBeInTheDocument()
  })

  // Sign-In State
  await waitFor(() => {
    const signInButton = screen.getByText(/Sign In/)

    expect(signInButton).toBeInTheDocument()

    userEvent.type(screen.getByPlaceholderText(/email address/i), "volunteer@cep.dev")
    userEvent.type(screen.getByPlaceholderText(/password/i), "password")
    userEvent.click(signInButton)
  })

  jest.restoreAllMocks();
  window.location = location;
})

test("volunteer is logged in", async () => {
  render(
    <MockedProvider mocks={mocksAuthenticated} addTypename={false}>
      <QueryClientProvider client={new QueryClient()}>
        <Landing />
      </QueryClientProvider>
    </MockedProvider>
  )

  // Welcome Dashboard State
  await waitFor(() => {
    expect(screen.getByText(/My Students/)).toBeInTheDocument
    expect(screen.getByText(/Joe Student/)).toBeInTheDocument
    expect(screen.getByText(/Jane Student/)).toBeInTheDocument
    expect(screen.getByText(/Recent Sessions/)).toBeInTheDocument
    expect(screen.getByText(/Joe Session/)).toBeInTheDocument
    expect(screen.getByText(/Jane Session/)).toBeInTheDocument
  })
})
