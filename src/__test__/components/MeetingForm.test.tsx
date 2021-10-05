import { screen, waitFor } from "@testing-library/react";
import { MeetingForm } from "components/MeetingForm";
import { User } from "models/User";
import React from "react";
import { renderWithQueryProvider } from "utils/test";

test("renders the form", async () => {
  const token = "foo";
  const user: User = { name: "John Smith" };

  renderWithQueryProvider(<MeetingForm authToken={token} user={user} />);
  await waitFor(() => {
    const welcomeText = screen.getByText(/John Smith/);

    expect(welcomeText).toBeInTheDocument();
  });
});
