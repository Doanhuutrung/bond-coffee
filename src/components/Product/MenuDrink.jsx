import React from 'react';
import { Container } from 'reactstrap';
import '../../styles/menuDrink.css';

const MenuDrink = ({title}) => {
  return( <section className="menu_drink">
    <Container className='text-center'>
        <h1>{title}</h1>
    </Container>
  </section>
  );
};

export default MenuDrink;