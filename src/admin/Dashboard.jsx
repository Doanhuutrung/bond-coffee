import React from "react";
import { Container, Col, Row } from "reactstrap";
import "../styles/Dashboard.css";
import useGetData from "../custom/useGetData";

const Dashboard = () => {
  const { data: drinks } = useGetData("drinks");
  const { data: users } = useGetData("users");
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-5">
              <div className="revenuie-box">
                <h5>Total Sales</h5>
                <span> $12345</span>
              </div>
            </Col>
            <Col className="lg-5">
              <div className="product-box">
                <h5>Total Products</h5>
                <span>{drinks.length}</span>
              </div>
            </Col>
            <Col className="lg-5">
              <div className="order-box">
                <h5>Total Oders</h5>
                <span>999</span>
              </div>
            </Col>
            <Col className="lg-5">
              <div className="user-box">
                <h5>Total Users</h5>
                <span> {users.length} </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
