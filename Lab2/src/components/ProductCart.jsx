import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCart = ({ product = {} }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(true);
    window.dispatchEvent(new Event('cart-update'));
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img 
        variant="top" 
        src={product?.image} 
        alt={product?.name || 'Product Image'} 
        style={{ height: '280px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="fs-5 fw-bold mb-0">{product?.name}</Card.Title>
          <Badge bg={product?.status === 'In Stock' ? 'success' : product?.status === 'Sale' ? 'danger' : 'secondary'}>
            {product?.status}
          </Badge>
        </div>
        <Card.Text className="fs-5 text-muted mb-3">
          {product?.price ? product.price.toLocaleString('vi-VN') : '0'}đ
        </Card.Text>
        
        {isAdded ? (
          <Button 
            variant="secondary" 
            className="mt-auto w-100 d-flex align-items-center justify-content-center gap-2" 
            disabled
          >
            <BsCheckLg /> Added to cart
          </Button>
        ) : (
          <Button 
            variant={product?.status === 'Out of Stock' ? 'secondary' : 'success'} 
            className="mt-auto w-100" 
            onClick={handleAddClick}
            disabled={product?.status === 'Out of Stock'}
          >
            {product?.status === 'Out of Stock' ? 'Out of Stock' : 'Add to cart'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCart;