import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Drinks from '../assets/data/Drinks';
import Logo from '../components/Logo/Logo';
import MenuDrink from '../components/Product/MenuDrink';
import '../styles/shop.css';
import Products from '../components/Product/Products';


const Shop = () => {
    const [drinksData, setDrinksData] = useState(Drinks);

    const handleFilter = (a) => {
        const filterValue = a.target.value;
        if(filterValue === 'Coffee') {
          const filterDrinks = Drinks.filter(
            (item) => item.category === 'Coffee'
          );
          setDrinksData(filterDrinks)
        }

        if(filterValue === 'Tea') {
          const filterDrinks = Drinks.filter(
            (item) => item.category === 'Tea'
          );
          setDrinksData(filterDrinks)
        }

        if(filterValue === 'Smoothie') {
          const filterDrinks = Drinks.filter(
            (item) => item.category === 'Smoothie'
          );
          setDrinksData(filterDrinks)
        }
    };

    const handleSearch = b => {
      const searchTerm = b.target.value
      const searchedDrinks = Drinks.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

      setDrinksData(searchedDrinks)
    }
  return (
    <Logo title='shop'>
      <MenuDrink title='Drinks' />
        <section>
          <Container>
            <Row>
              <Col lg='4' md='6'>
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option> Filter by category </option>
                    <option value="Coffee"> Coffee </option>
                    <option value="Tea"> Tea </option>
                    <option value="Smoothie"> Smoothie </option>
                  </select>
                </div>
              </Col>
              <Col lg='4' md='6'>
              <div className="filter_widget">
                  <select >
                    <option> Sort by category </option>
                    <option value="popular"> Popular Drink </option>
                    <option value="signature"> Signature Drink </option>
                  </select>
                </div>
              </Col>
              <Col lg='5' md='8'>
                <div className="search_box">
                  <input type='text' placeholder='Find your lovely drinks..' onChange={handleSearch}/>
                  <span>
                  <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
            <Container>
              <Row>
                {
                  drinksData.length === 0? <h1 className='text-center fs-6'> you haven't chosen a drink yet </h1>
                  : <Products data={drinksData} />
                }
              </Row>
            </Container>
        </section>
    </Logo>
  )
}

export default Shop