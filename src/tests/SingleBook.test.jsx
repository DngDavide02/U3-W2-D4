import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleBook from "../components/SingleBook";

const TestComponent = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = React.useState(null);

  return (
    <>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} isSelected={selectedAsin === book.asin} onSelect={setSelectedAsin} />
      ))}
    </>
  );
};

const books = [
  { asin: "book1", title: "Book One", img: "https://via.placeholder.com/150" },
  { asin: "book2", title: "Book Two", img: "https://via.placeholder.com/150" },
];

test("cambia il bordo del libro selezionato", () => {
  render(<TestComponent books={books} />);

  const bookCards = screen.getAllByTestId("single-book");

  fireEvent.click(bookCards[0]);
  expect(bookCards[0].classList.contains("selected-book")).toBe(true);
  expect(bookCards[1].classList.contains("selected-book")).toBe(false);

  fireEvent.click(bookCards[1]);
  expect(bookCards[1].classList.contains("selected-book")).toBe(true);
  expect(bookCards[0].classList.contains("selected-book")).toBe(false);
});
