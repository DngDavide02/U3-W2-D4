import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, refresh }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);

    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODI1NTFjMjUwNDAwMTUxYWI2NmUiLCJpYXQiOjE3NDczMTIyODUsImV4cCI6MTc0ODUyMTg4NX0.ymlRZ9uS4iz3cEIb71fkHXI8hX7TB8R0qiD-gaPcKLE",
        },
        body: JSON.stringify({
          comment: comment,
          rate: rate,
          elementId: asin,
        }),
      });

      if (res.ok) {
        setComment("");
        setRate(1);
        setIsSending(false);
        refresh();
      } else {
        throw new Error("Errore durante l'invio del commento");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setIsSending(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group controlId="commentText">
        <Form.Label>Commento</Form.Label>
        <Form.Control as="textarea" rows={2} value={comment} onChange={(e) => setComment(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="rateSelect" className="mt-2">
        <Form.Label>Valutazione</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(parseInt(e.target.value))} required>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button type="submit" className="mt-3" disabled={isSending} variant="success">
        Invia commento
      </Button>

      {isError && <p className="text-danger mt-2">Si è verificato un errore, riprova.</p>}
    </Form>
  );
};

export default AddComment;
