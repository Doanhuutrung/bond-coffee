import React from 'react';
import './footer.css';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='shop'>
            <div>
              <h1 className='text-black'> TrungCoffee</h1>
            </div>
          </div>
          <p className='footer_text mt-2'>
            "People in Da Nang have a very peculiar habit of drinking coffee. They can, therefore, drink coffee throughout the day at various periods and several occasions.
            In Da Nang, the cup of coffee, not the betel nut, is the beginning of a sentence, whether it be extremely early in the morning before sunrise, in the midst of the day when busy, early afternoon after a little lunch break, or even late at night, we don't know where.
            Narrative, and Coffee Go is interpreted as a kind greeting and outspoken love for the city's coastal citizens' youngsters ".
          </p>
        </Col>
        <Col lg='4'>
          <div className='footer_links'>
            <h4 className="links_title"> Contact us </h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span> <i className="ri-map-2-line"></i> </span>
                <p> 123 Le Dinh Ly, Danang, VietNam</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span> <i className="ri-phone-line"></i> </span>
                <p> 0582861529 </p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span> <i className="ri-mail-send-line"></i> </span>
                <p> huutrungdoan2202@gmail.com </p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='10'>
          <p className='footer_copyright'>Copyright {year} established by Huu Trung. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>


}

export default Footer