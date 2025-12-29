import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";

import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeFromCart, clearCart } from "../redux/CartActionsSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // ✅ Select only what we need
  const cartItems = useAppSelector((state) => state.cart.items);

  // Calculate total items and total price
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <NavBar />
      <h1 className="text-center mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row className="g-4">
            {cartItems.map((item) => (
              <Col key={item.id} md={6} lg={4}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>

                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        height: "150px",
                        objectFit: "contain",
                        marginBottom: "1rem",
                      }}
                    />

                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>

                    <Button
                      variant="danger"
                      className="mt-auto"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <h4>Total Items: {totalItems}</h4>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>

          <Button
            variant="success"
            className="mt-3"
            disabled={cartItems.length === 0}
            onClick={() => {
              dispatch(clearCart());
              alert("Thank you for your purchase! Your cart has been cleared.");
              navigate("/");
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
