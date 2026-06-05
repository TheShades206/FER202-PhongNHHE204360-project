import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function FormControl() {
  return (
    <div className="bg-dark py-5 text-white">
      <Container>
        <h3 className="text-center mb-5">Book Your Table</h3>
        <Form>
          <Row className="mb-3">
          
            <Form.Group as={Col}  className="mb-3">
              <Form.Label>Your Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

    
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Date *</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

         
            <Form.Group as={Col}  className="mb-3">
              <Form.Label>Select a Service *</Form.Label>
              <Form.Select>
                <option>Choose service...</option>
                <option>Birthday Party</option>
                <option>Anniversary</option>
                <option>Business Dinner</option>
              </Form.Select>
            </Form.Group>
          </Row>

          
          <Form.Group className="mb-4">
            <Form.Label>Please share your message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
          </Form.Group>

          
          <div className="text-center">
            <Button variant="warning" type="submit" className="px-4 fw-bold text-dark">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default FormControl;
