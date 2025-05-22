import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, refresh }) => {
  const deleteComment = async () => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0ODI1NTFjMjUwNDAwMTUxYWI2NmUiLCJpYXQiOjE3NDczMTIyODUsImV4cCI6MTc0ODUyMTg4NX0.ymlRZ9uS4iz3cEIb71fkHXI8hX7TB8R0qiD-gaPcKLE",
        },
      });
      if (res.ok) refresh();
    } catch (error) {
      console.log("Errore eliminazione", error);
    }
  };

  return (
    <ListGroup.Item data-testid="single-comment">
      {comment.comment} – ⭐{comment.rate}
      <Button variant="danger" size="sm" className="float-end" onClick={deleteComment}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
