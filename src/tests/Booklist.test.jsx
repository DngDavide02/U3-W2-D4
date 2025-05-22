// import { render, screen } from "@testing-library/react";
// import BookList from "../components/BookList";
// import books from "../json/fantasy.json";

// test("renderizza tante card quanti sono i libri nel JSON", () => {
//   render(<BookList books={books} />);

//   const renderedBooks = screen.getAllByTestId("single-book");

//   expect(renderedBooks.length).toBe(books.length);
// });

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookList from "../components/BookList";
import books from "../json/fantasy.json";

describe("BookList - funzionalità di ricerca", () => {
  test("visualizza tutti i libri all'inizio", () => {
    render(<BookList books={books} />);
    const renderedBooks = screen.getAllByTestId("single-book");
    expect(renderedBooks.length).toBe(books.length);
  });

  test("filtra i libri in base al termine di ricerca", async () => {
    render(<BookList books={books} />);
    const searchInput = screen.getByPlaceholderText(/search books by title/i);
    await userEvent.type(searchInput, "witcher");

    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes("witcher"));

    const renderedBooks = screen.getAllByTestId("single-book");
    expect(renderedBooks.length).toBe(filteredBooks.length);
    renderedBooks.forEach((bookCard) => {
      expect(bookCard.textContent.toLowerCase()).toContain("witcher");
    });
  });

  test("mostra messaggio quando nessun libro corrisponde alla ricerca", async () => {
    render(<BookList books={books} />);
    const searchInput = screen.getByPlaceholderText(/search books by title/i);
    await userEvent.type(searchInput, "titoloinesistente");

    const noResultsMessage = screen.getByText(/no books match your search/i);
    expect(noResultsMessage).toBeInTheDocument();
  });

  test("ripristina la lista completa quando il campo di ricerca è svuotato", async () => {
    render(<BookList books={books} />);
    const searchInput = screen.getByPlaceholderText(/search books by title/i);
    await userEvent.type(searchInput, "witcher");
    await userEvent.clear(searchInput);

    const renderedBooks = screen.getAllByTestId("single-book");
    expect(renderedBooks.length).toBe(books.length);
  });
});
