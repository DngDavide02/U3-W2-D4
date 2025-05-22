import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("CommentArea", () => {
  test("mostra messaggio quando asin non è presente", () => {
    render(<CommentArea asin={null} />);
    const message = screen.getByText(/seleziona un libro per vedere i commenti/i);
    expect(message).toBeInTheDocument();
  });

  test("renderizza correttamente il contenitore quando asin è presente", () => {
    render(<CommentArea asin="123456" />);
    const commentCard = screen.getByTestId("comment-area");
    expect(commentCard).toBeInTheDocument();
  });
});
