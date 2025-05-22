import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommentArea from "../components/CommentArea";

test("nessun SingleComment nel DOM all’avvio senza asin", () => {
  render(<CommentArea asin={null} />);

  const commentElements = screen.queryAllByTestId("single-comment");
  expect(commentElements.length).toBe(0);
});
