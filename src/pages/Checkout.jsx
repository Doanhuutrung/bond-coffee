import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import Logo from "../components/Logo/Logo";
import MenuDrink from "../components/Product/MenuDrink";
import "../styles/checkout.css";
import { toast } from "react-toastify";

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const Checkout = () => {
    toast.success("Thank you for your ordering !!");
  };
  return (
    <Logo title="Checkout">
      <MenuDrink title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="5">
              <h6 className="title"> Invoice Payment </h6>
              <Form className="form_bill">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="phone" placeholder="Enter your phone number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your address" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="6">
              <div className="checkout_cart">
                <h6>
                  {" "}
                  Total Quantity: <span>{totalQuantity}</span>
                </h6>
                <h6>
                  {" "}
                  Subtotal: <span> {totalAmount} </span>
                </h6>
                <h6>
                  {" "}
                  Shipping fees:
                  <p> $20 </p>
                </h6>
                <h4>
                  {" "}
                  Total: <span>{totalAmount}</span>{" "}
                </h4>
                <button className="auth_btn" onClick={Checkout}>
                  {" "}
                  <Link to="/Home"> Confirm payment </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Logo>
  );
};

export default Checkout;
