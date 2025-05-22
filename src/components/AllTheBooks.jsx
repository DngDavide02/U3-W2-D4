import { Card, Col, Container, Row } from "react-bootstrap";

const AllTheBooks = ({ books }) => (
  <Container className="mt-4">
    <Row>
      {books.map((book) => (
        <Col xs={6} md={4} lg={3} key={book.asin} className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{book.title}</Card.Title>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary rounded-pill px-4 mt-2">Add to Cart</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
