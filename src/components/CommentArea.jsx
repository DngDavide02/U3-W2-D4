import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    if (!asin) return;

    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODI1NTFjMjUwNDAwMTUxYWI2NmUiLCJpYXQiOjE3NDczMTIyODUsImV4cCI6MTc0ODUyMTg4NX0.ymlRZ9uS4iz3cEIb71fkHXI8hX7TB8R0qiD-gaPcKLE",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setComments(data);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.error("Errore durante il fetch dei commenti:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  if (!asin) {
    return <p className="text-muted">Seleziona un libro per vedere i commenti.</p>;
  }

  return (
    <Card data-testid="comment-area" className="comment-area-card mt-3 comment-area-sticky">
      <Card.Body>
        <h5 className="text-center mb-4">Commenti</h5>
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && (
          <>
            <CommentsList comments={comments} refresh={fetchComments} />
            <AddComment asin={asin} refresh={fetchComments} />
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default CommentArea;
