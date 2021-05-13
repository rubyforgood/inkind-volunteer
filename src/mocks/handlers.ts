import { rest } from "msw";

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
    );
  }),

  rest.get("/students", (req, res, ctx) => {
    return res(
      ctx.json({
        students: [
          {
            id: 1,
            firstName: "Joe",
            lastName: "Student",
          },
          {
            id: 2,
            firstName: "Jane",
            lastName: "Student",
          },
        ],
      })
    );
  }),

  // rest.get("/survey/1", (req, res, ctx) => {
  //   return res(
  //     ctx.json({
  //       id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //       name: "The First Survey",
  //       active: true,
  //       questions: [
  //         {
  //           id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //           questionType: "multiple choice",
  //           prompt: "Why is there air?",
  //           options: [
  //             {
  //               id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //               text: "To breathe",
  //             },
  //             {
  //               id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //               text: "Just because",
  //             },
  //             {
  //               id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //               text: "To blow up basketballs, blow up volleyballs",
  //             },
  //           ],
  //         },
  //       ],
  //     })
  //   );
  // }),

  // rest.post("/survey/1", (req, res, ctx) => {
  //   const { username } = req.body;
  // }),
];
