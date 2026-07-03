import React from 'react'


import fb from '../img/fb.png';
import insta from '../img/insta.png';
import lk from '../img/lk.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for social media icons

// ... other imports

function Footer() {
  return (
    <Card className='bg-dark footer ' style={{ borderRadius: '0' }}>
      <Card.Body>
        <Container className='align-items-center'>
          <Row className="text-center">
            <Col xs={12}>
              <div className='footer-icons'>
                <FontAwesomeIcon icon={faFacebook} className='icon m-3' style={{ color: "#ffffff", }} />
                <FontAwesomeIcon icon={faInstagram} className='icon m-3' style={{ color: "#ffffff", }} />
                <FontAwesomeIcon icon={faLinkedin} className='icon m-3' style={{ color: "#ffffff", }} />
              </div>
            </Col>
          </Row>
          <Row className="text-center color-white">
            <Col xs={12}>
              <div className='footertext '>
                <h6 style={{ color: '#ffffff' }}>© 2023 copyright all right reserved by None</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Footer;