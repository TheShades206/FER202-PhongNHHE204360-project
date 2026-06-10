import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../data/products';
import ProductCart from './ProductCart';

const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <ProductCart product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;