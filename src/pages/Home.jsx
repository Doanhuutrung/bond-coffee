import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../components/Logo/Logo";
import { Container, Row, Col } from "reactstrap";
import specialty from "../assets/images/specialty.png";
import "../styles/home.css";
import Services from "../services/Services";
import Products from "../components/Product/Products";
import Barista from "../assets/images/barista.png";
import Event from "../components/Product/Event";

import useGetData from "../custom/useGetData";

const Home = () => {
  const { data: drinks, loading } = useGetData("drinks");

  const [SignatureDrink, setSignatureDrink] = useState([]);
  const [BestSalesDrink, setBestSalesDrink] = useState([]);
  const [NewDrinks, setNewDrinks] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredSignatureDrinks = drinks.filter(
      (item) => item.category === "Coffee"
    );

    const filteredBestSalesDrinks = drinks.filter(
      (item) => item.category === "Tea"
    );

    const filteredNewDrinks = drinks.filter(
      (item) => item.category === "Smoothie"
    );

    setSignatureDrink(filteredSignatureDrinks);
    setBestSalesDrink(filteredBestSalesDrinks);
    setNewDrinks(filteredNewDrinks);
  }, [drinks]);
  return (
    <Logo title={"Home"}>
      <section className="home_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="home_content">
                <p className="home_subtitle">
                  This products have been made in {year}
                </p>
                <h2> This is specialty cofee</h2>
                <p>
                  V60 is based on drip coffee to bring precious essences in each
                  Arabica coffee bean of the regions. It will be 1 choice that
                  is difficult to ignore when you are a coffee addict because
                  you will not be able to resist the taste and aroma that the
                  farmers make into it.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/Shop">Buy Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="home_img">
                <img src={specialty} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="hot_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="product_title"> New Drinks for this season </h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold"> Loading..................</h5>
            ) : (
              <Products data={SignatureDrink} />
            )}
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title"> Best Sales </h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold"> Loading..................</h5>
            ) : (
              <Products data={BestSalesDrink} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="event_content">
                <h2>Cupping Day</h2>
                <p>
                  {" "}
                  this will be the day when bartenders can try their hand at
                  their experience and learn more from their competitors.{" "}
                </p>
              </div>
              <Event />
              <motion.button whileTap={{ scale: 1.2 }} className="join_btn">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdCVDXbldn8obRqa6xkswBvRG6Zk3jT0Xd35YtMq0wbOHPk2g/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Now
                </a>
              </motion.button>
            </Col>
            <Col lg="" md="20" className="text-end">
              <img src={Barista} alt=" " />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_drinks">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title"> Signature Drink </h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold"> Loading..................</h5>
            ) : (
              <Products data={NewDrinks} />
            )}
          </Row>
        </Container>
      </section>
    </Logo>
  );
};

export default Home;
