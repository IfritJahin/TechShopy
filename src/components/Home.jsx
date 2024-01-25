import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Rating from 'react-rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/home.css';
import Home_p from './Home_p';
import appleImg from '../img/app3.jpg';
import apple2Img from '../img/app1.jpg';
import apple3Img from '../img/app2.png';
import addbg from '../img/addbg.png';
import Sonos from '../img/Sonos.jpg';
import phone from '../img/phone.png';
import phone2 from '../img/phone2.png';
import video from '../img/videoplayback.mp4'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as faBars, faCartShopping, faStar, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Card, Image, OverlayTrigger, Tooltip, Button, Tab, Tabs, Form, Row, Col, Nav, Container, Badge } from 'react-bootstrap';

import { faUser as faUser } from '@fortawesome/free-solid-svg-icons'



function Home() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main>
      <div className='' style={{ marginBottom: '0' }}>
        <Container fluid>
          <div className="embed-responsive embed-responsive-16by9 w-100 vh-100">
            <video className="embed-responsive-item top-0 left-0 img-fluid" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </Container>

      </div>
      <div className='text-center mb-0 mt-0'>
        <Card className='mobile-display' style={{ border: 'none' }}>
          <Tabs
            defaultActiveKey="Popular"
            id="uncontrolled-tab-example"
            className="mt-5 mb-3 d-flex justify-content-center"
            variant="underline"
            style={{ color: 'blue', fontSize: '20px' }}
          >
            <Nav.Item className='top-nav' eventKey="Popular" title="Popular">
              <Card.Body >
                <div className='bg-white' style={{ height: '520px', marginBottom: '20px' }}>
                  <div className="popular">
                    <div className='container'>
                      <Slider {...settings}>
                        {
                          Home_p.map((curElement) => {
                            return (
                              <div className='' key={curElement.id} >
                                <Card className='box' style={{ width: '18rem', maxHeight: '500px' }}>
                                  <Card.Img variant="top" className='img' style={{ maxHeight: '288px' }} src={curElement.img} alt='' />
                                  <Card.Body className='card_body'>
                                    <Card.Title className="box-title" ><h6>{curElement.Name || 'Product Name'}</h6></Card.Title>
                                    <Card.Text className="box-description " style={{ maxHeight: '24px', }}><h7>{curElement.type || 'Product Description'}</h7></Card.Text>
                                    <Card.Text className="box-price"><h6>Price: {curElement.price}</h6></Card.Text>
                                    <Rating className='align-items-center'
                                      emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#fae500", }} />}
                                      fullSymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#dde000", }} />}
                                    />

                                    <div className="hover-icons">
                                      <div className='d-flex justify-content-center'>

                                        <Link to='/checkout'>
                                          <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: '3rem', width: '3em', }}>
                                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '15px' }} />
                                          </Button>
                                        </Link>


                                        <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: '3rem', width: '3em', }}>
                                          <FontAwesomeIcon icon={faHeart} style={{ color: "white", fontSize: '15px' }} />
                                        </Button>
                                      </div>
                                      <Button variant="none" className='rounded-pill mt-3' style={{ color: 'white', background: '#122e3c', }}>Select Options</Button>
                                    </div>
                                  </Card.Body>


                                </Card>
                              </div>
                            )
                          })
                        }
                      </Slider>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Nav.Item>
            <Nav.Item eventKey="On Sale" title="On Sale">

              <Card.Body >
                <Card.Title className='mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: '30px' }}>On Sale</Card.Title>


              </Card.Body>
            </Nav.Item>
            <Nav.Item eventKey="Top Rated" title="Top Rated">
              <Card.Body >
                <Card.Title className='mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: '30px' }}>Top Rated</Card.Title>


              </Card.Body>
            </Nav.Item>
          </Tabs></Card>
      </div>
      <Container className='bg-container mb-5' style={{ height: '210px' }}>
        <div className='bg-con' style={{ height: '160px' }}>
          <div className="centerBox mt-3">
            <div className="categoryWrapper">
              <Row className="justify-content-md-center mt-3">
                <Col md="auto" style={{ textAlign: 'right' }}>
                  <div className='mt-3'>
                    <span>New Deals </span><br />
                    <span>Start Daily at 12pm</span>
                  </div>
                </Col>
                <Col xs lg="1">
                  <div className="vl"></div>
                </Col>
                <Col className=''>
                  <h4 style={{ color: '#2a2a28' }}>20% Discount In All Products</h4>
                  <Button className='btnr rounded-pill' variant='none' style={{ backgroundColor: '#122e3c', width: '100%' }}>
                    <span style={{ color: 'white' }}>
                      <span data-attr-span="See the Range">
                        See the Range
                      </span>
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} beat size='lg' style={{ color: "white", marginLeft: '10px' }} />
                  </Button>


                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>



      <div className='mb-5'>
        <Container>
          <Row className='justify-content-md-center'>
            <Col xs={12} md={8}>
              <Carousel data-bs-theme="white">
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={Sonos}
                    alt="First slide"
                    rounded
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Carousel.Caption className="text-caption" style={{ textAlign: 'left', color: 'black' }}>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={addbg}
                    alt="Second slide"
                    rounded
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Carousel.Caption className="text-caption">
                    <div className='font' style={{ textAlign: 'left' }}>
                      <h2 className='text-white'>The Westmire</h2>
                      <h2 className='text-white'>
                        <span><b>A56 Headset</b></span>
                      </h2>
                      <h5 className='text-white'>Today: <b style={{ color: '#FFDE59', fontSize: '40px' }}>29.99$</b></h5>
                      <Button className='rounded-pill' variant='none' style={{ background: '#122e3c', fontSize: '11px', width: '100px' }}>
                        <Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
                          <b>Buy Now</b><i className="fas" style={{ marginLeft: '5px' }}>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </i>
                        </Link>
                      </Button>
                      <Button className='rounded-pill m-2' variant='none' style={{ color: 'black', background: 'rgba(207, 205, 189, 0.4)', fontSize: '11px', width: '100px' }}>
                        <b>Shop Now</b>
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} md={4}>
              <Row className='mb-2'>
                <Col xs={12}>
                  <div style={{ position: 'relative' }}>
                    <Image src={phone} rounded style={{ width: '100%', height: 'auto', maxHeight: '200px' }} />
                    <Button className='rounded-pill buy-now-button' variant='none' style={{ position: 'absolute', bottom: '15px', left: '18px', background: '#122e3c', fontSize: '9px', width: '100px' }}>
                      <Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
                        <b>Buy Now</b><i className="fas" style={{ marginLeft: '5px', color: 'white' }}>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div style={{ position: 'relative' }}>
                    <Image src={phone2} rounded style={{ width: '100%', height: 'auto', maxHeight: '200px' }} />
                    <Button className='rounded-pill buy-now-button' variant='none' style={{ position: 'absolute', bottom: '8px', left: '190px', background: '#ffffff', fontSize: '9px', width: '80px' }}>
                      <Link to='/checkout' style={{ textDecoration: 'none', color: 'black' }}>
                        <b>Buy Now</b><i className="fas" style={{ marginLeft: '5px' }}>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='cont'>
        <video autoPlay muted loop>
          <source
            src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="h text-center font-weight-bold display-1 text-uppercase bg-white">
          sale
        </h2>

      </div>


    </main >
  )
};

export default Home;
