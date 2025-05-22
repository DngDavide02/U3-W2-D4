import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, isSelected, onSelect } = this.props;

    return (
      <Card
        data-testid="single-book"
        onClick={() => onSelect(book.asin)}
        className={`h-100 mb-4 single-book-card ${isSelected ? "selected-book" : ""}`}
        style={{ cursor: "pointer", transition: "all 0.3s ease-in-out" }}
      >
        <Card.Img variant="top" src={book.img} className="card-img-top" />
        <Card.Body onClick={(e) => e.stopPropagation()}>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
