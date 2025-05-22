import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";
import mockBooks from "../json/fantasy.json";
import { vitest } from "vitest";

const mockComments = [
  {
    _id: "1",
    comment: "Ottimo libro",
    rate: 5,
  },
  {
    _id: "2",
    comment: "Bellissimo",
    rate: 4,
  },
];

beforeEach(() => {
  vitest.spyOn(global, "fetch").mockImplementation((url) => {
    if (url.includes("comments")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockComments),
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    });
  });
});

afterEach(() => {
  vitest.restoreAllMocks();
});

test("cliccando su un libro con recensioni, i commenti vengono caricati nel DOM", async () => {
  render(<App books={mockBooks} />);

  const firstBook = await screen.findAllByTestId("single-book");
  userEvent.click(firstBook[0]);

  await waitFor(() => {
    expect(screen.getAllByTestId("single-comment").length).toBeGreaterThan(0);
  });

  expect(screen.getByText(/ottimo libro/i)).toBeInTheDocument();
});
