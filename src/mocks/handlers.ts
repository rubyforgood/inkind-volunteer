import { rest } from "msw"

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.json({
        authToken: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        user: {
          firstName: "Valerie",
          lastName: "Volunteer",
        },
      })
    )
  }),

  rest.get("/students", (req, res, ctx) => {
    return res(
      ctx.json({
        students: [
          {
            id: 1,
            firstName: "Joe",
            lastName: "Student",
            dateOfBirth: "03/22/07"
          },
          {
            id: 2,
            firstName: "Jane",
            lastName: "Student",
            dateOfBirth: "10/19/08"
          },
        ],
      })
    )
  }),

  rest.get("/sessions", (req, res, ctx) => {
    return res(
      ctx.json({
        sessions: [
          {
            id: 1,
            student: "Joe Student",
            date: "03/22/21",
          },
          {
            id: 2,
            student: "Jane Student",
            date: "10/22/21",
          },
          {
            id: 3,
            student: "Joe Student",
            date: "02/17/21",
          },
          {
            id: 4,
            student: "Jane Student",
            date: "1/19/21",
          },
        ],
      })
    )
  }),
]
