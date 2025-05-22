import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Row, Col, Form, Container } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={8}>
          <Form className="mb-3">
            <Form.Control type="text" placeholder="Search books by title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </Form>
          <Row>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <SingleBook book={book} isSelected={selectedAsin === book.asin} onSelect={() => setSelectedAsin(book.asin)} />
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center text-muted">No books match your search.</p>
              </Col>
            )}
          </Row>
        </Col>

        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
