import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import '../styles/services.css';
import serviceData from '../assets/data/serviceData';

const Services = () => {
  return (
  <section className='services'>
    <Container>
        <Row>
        {serviceData.map((item,index) => (
            <Col lg='3' md='4' key={index}>
                <div className='service_item'>
                    <span>
                    <i className={item.icon}></i>
                    <div>
                        <h3> {item.title}</h3>
                        <p> {item.subtitle} </p>
                    </div>
                    </span>
                </div>
            </Col>
            ))}
        </Row>
    </Container>
    </section>
  );
}

export default Services