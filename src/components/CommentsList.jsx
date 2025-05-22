import SingleComment from "./SingleComment";
import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = ({ comments, refresh }) => (
  <ListGroup>
    {comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} refresh={refresh} />
    ))}
  </ListGroup>
);

export default CommentsList;
