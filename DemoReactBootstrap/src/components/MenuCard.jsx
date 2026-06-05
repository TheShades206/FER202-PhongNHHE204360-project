import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";

function MenuCard() {
  return (
    <div className="bg-dark py-5">
      <Container>
        <h3 className="text-center text-white mb-5">Our Menu</h3>
        <Row className="g-4">
          {/* Margherita Pizza */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-secondary text-white border-0 h-100 position-relative">
              <Badge bg="warning" className="position-absolute m-2 text-dark">
                SALE
              </Badge>
              <Card.Img variant="top" src={menu1} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Margherita Pizza</Card.Title>
                <div className="my-2">
                  <span className="text-decoration-line-through text-light opacity-50 me-2">$20.00</span>
                  <span className="text-warning fw-bold">$14.00</span>
                </div>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Mushroom Pizza */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-secondary text-white border-0 h-100">
              <Card.Img variant="top" src={menu2} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Mushroom Pizza</Card.Title>
                <div className="my-2">
                  <span className="text-decoration-line-through text-light opacity-50 me-2">$22.00</span>
                  <span className="text-warning fw-bold">$17.00</span>
                </div>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Hawaiian Pizza */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-secondary text-white border-0 h-100 position-relative">
              <Badge bg="warning" className="position-absolute m-2 text-dark">
                SALE
              </Badge>
              <Card.Img variant="top" src={menu3} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Hawaiian Pizza</Card.Title>
                <div className="my-2">
                  <span className="text-decoration-line-through text-light opacity-50 me-2">$19.00</span>
                  <span className="text-warning fw-bold">$16.00</span>
                </div>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Pesto Pizza */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-secondary text-white border-0 h-100 position-relative">
              <Badge bg="warning" className="position-absolute m-2 text-dark">
                SALE
              </Badge>
              <Card.Img variant="top" src={menu4} />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Pesto Pizza</Card.Title>
                <div className="my-2">
                  <span className="text-decoration-line-through text-light opacity-50 me-2">$23.00</span>
                  <span className="text-warning fw-bold">$17.00</span>
                </div>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuCard;
