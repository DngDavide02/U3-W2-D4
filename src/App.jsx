import { useState } from "react";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

import fantasy from "./json/fantasy.json";
import history from "./json/history.json";
import romance from "./json/romance.json";
import horror from "./json/horror.json";
import science from "./json/scifi.json";

import "./App.css";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function App() {
  // Definizione dell'oggetto 'genres' che mappa il nome del genere ai rispettivi dati (libri)
  const genres = {
    Fantasy: fantasy,
    Horror: horror,
    Romance: romance,
    History: history,
    Science: science,
  };

  // Stato per tracciare il genere selezionato, inizialmente impostato su "Fantasy"
  const [selectedGenre, setSelectedGenre] = useState("Fantasy");

  return (
    <>
      <MyNav />
      <Welcome />
      <Container className="text-center mt-4">
        <h4>Select a Genre:</h4>
        <ButtonGroup className="my-3">
          {/* Itera su ogni genere e crea un pulsante per ognuno */}
          {/* Object.keys(genres) è una funzione che restituisce un array contenente tutte le chiavi dell'oggetto genres. */}
          {Object.keys(genres).map((genre) => (
            <Button
              key={genre}
              variant={genre === selectedGenre ? "primary" : "outline-primary"}
              onClick={() => setSelectedGenre(genre)} // Imposta il genere selezionato al click
            >
              {genre} {/* Nome del genere */}
            </Button>
          ))}
        </ButtonGroup>
      </Container>

      {/* Componente che mostra tutti i libri del genere selezionato */}
      <BookList books={genres[selectedGenre]} />
      <MyFooter />
    </>
  );
}

export default App;
