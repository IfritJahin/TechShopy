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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ]
  };

  return (
    // overflow-x hidden stops any fixed-width/absolutely-positioned
    // element (the hardcoded left/width buy-now buttons, fixed card
    // widths, etc.) from ever forcing horizontal scroll on a phone
    <main style={{ overflowX: 'hidden', width: '100%' }}>
      {/* Same design, just letting it flex at the sizes that actually
          break on real devices: phones (<=480px) and tablets/iPad
          portrait (<=768px, which is also Bootstrap's md breakpoint). */}
      <style>{`
        @media (max-width: 768px) {
          .home-carousel-col,
          .home-side-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .home-side-col {
            margin-top: 12px;
          }
          .box {
            width: clamp(160px, 45vw, 240px) !important;
          }

        }
        @media (max-width: 480px) {
          .buy-now-button-2 {
            left: auto !important;
            right: 8px !important;
          }
        }
      `}</style>
<div className="home-video-section">
  <Container fluid className="px-0">
    <div className="home-hero-video-wrap">
      <video
        className="home-hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </Container>
</div>
      <div className='text-center' style={{ marginBottom: '100px', marginTop: '100PX' }}>
        <Card className='mobile-display' style={{ border: 'none' }}>
          <Tabs
            defaultActiveKey="Popular"
            id="uncontrolled-tab-example"
            className=" d-flex justify-content-center flex-wrap"
            variant="underline"
            style={{ color: 'blue', fontSize: 'clamp(12px, 4vw, 20px)' }}
          >
            <Nav.Item className='top-nav' eventKey="Popular" title="Popular">
              <Card.Body className="px-1 px-sm-2 px-md-3">
                <div className='bg-white' style={{ height:'100%' }}>
                  <div className="popular">
                    <div className='container'>
                      <Slider {...settings}>
                        {
                          Home_p.map((curElement) => {
                            return (
                              <div className='' key={curElement.id} >
                                <Card
                                  className='box mx-auto'
                                  style={{
                                    width: 'clamp(150px, 42vw, 18rem)',
                                    maxWidth: '18rem',
                                    minWidth: '150px'
                                  }}
                                >
                                  <Card.Img
                                    variant="top"
                                    className='img'
                                    style={{ width: '100%', height: 'clamp(150px, 32vw, 288px)', objectFit: 'cover' }}
                                    src={curElement.img}
                                    alt=''
                                  />
                                  <Card.Body className='card_body px-2 px-sm-3'>
                                    <Card.Title className="box-title" ><h6 style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>{curElement.Name || 'Product Name'}</h6></Card.Title>
                                    <Card.Text className="box-description " style={{ maxHeight: '24px', }}><h7 style={{ fontSize: 'clamp(10px, 2.5vw, 13px)' }}>{curElement.type || 'Product Description'}</h7></Card.Text>
                                    <Card.Text className="box-price"><h6 style={{ fontSize: 'clamp(11px, 2.8vw, 15px)' }}>Price: {curElement.price}</h6></Card.Text>
                                    <Rating className='align-items-center'
                                      emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#fae500", }} />}
                                      fullSymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#dde000", }} />}
                                    />

                                    <div className="hover-icons">
                                      <div className='d-flex justify-content-center'>

                                        <Link to='/checkout'>
                                          <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: 'clamp(2.4rem, 8vw, 3rem)', width: 'clamp(2.4rem, 8vw, 3em)', }}>
                                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: 'clamp(12px, 3vw, 15px)' }} />
                                          </Button>
                                        </Link>


                                        <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: 'clamp(2.4rem, 8vw, 3rem)', width: 'clamp(2.4rem, 8vw, 3em)', }}>
                                          <FontAwesomeIcon icon={faHeart} style={{ color: "white", fontSize: 'clamp(12px, 3vw, 15px)' }} />
                                        </Button>
                                      </div>
                                      <Button variant="none" className='rounded-pill mt-3' style={{ color: 'white', background: '#122e3c', fontSize: 'clamp(11px, 2.5vw, 14px)' }}>Select Options</Button>
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
                <Card.Title className='mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: 'clamp(18px, 5vw, 30px)' }}>On Sale</Card.Title>


              </Card.Body>
            </Nav.Item>
            <Nav.Item eventKey="Top Rated" title="Top Rated">
              <Card.Body >
                <Card.Title className='mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: 'clamp(18px, 5vw, 30px)' }}>Top Rated</Card.Title>


              </Card.Body>
            </Nav.Item>
          </Tabs></Card>
      </div>
      <Container
        fluid
        className="bg-container d-flex justify-content-center align-items-center"
        style={{ minHeight: "clamp(120px, 25vh, 210px)" , marginBottom: '100px' }}
      >
        <div
          className="bg-con d-flex justify-content-center align-items-center mx-auto"
          style={{ minHeight: "clamp(100px, 20vh, 160px)" }}
        >
                <div className="centerBox">
                  <div className="categoryWrapper">
                    <Row className="justify-content-center justify-content-md-center mt-2 mt-md-3 px-2 home-deal-row">
                      <Col xs={12} md="auto" style={{ textAlign: 'right' }} className='text-center text-md-end mb-2 mb-md-0'>
                        <div className='mt-2 mt-md-3'>
                          <span style={{ fontSize: 'clamp(11px, 3vw, 15px)', display: 'block' }}>New Deals </span><br />
                          <span style={{ fontSize: 'clamp(10px, 2.5vw, 13px)', display: 'block' }}>Start Daily at 12pm</span>
                        </div>
                      </Col>
                      <Col xs="auto" lg="1" className='d-none d-md-block'>
                        <div className="vl"></div>
                      </Col>
                      <Col xs={12} md={true} className='discount px-1 px-md-3 '>
                        <h4 style={{ color: '#2a2a28', fontSize: 'clamp(13px, 4vw, 22px)', marginBottom: 'clamp(0.3rem, 2vw, 0.5rem)' }}>20% Discount In All Products</h4>
                      <Button
                        className="btnr rounded-pill d-flex align-items-center justify-content-center"
                        variant="none"
                        style={{
                          backgroundColor: "#122e3c",
                          fontSize: "clamp(10px, 2vw, 14px)",
                          padding: "clamp(0.45rem, 1vw + 0.3rem, 0.75rem)",
                          gap: "6px",
                          minHeight: "40px",
                        }}
                      >
                        <span style={{ color: "white" }}>
                          <span data-attr-span="See the Range">
                            See the Range
                          </span>
                        </span>

                        <FontAwesomeIcon
                          icon={faArrowRight}
                          beat
                          style={{
                            color: "white",
                            fontSize: "clamp(12px, 2vw, 16px)",
                          }}
                        />
                      </Button>


                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
      </Container>



      <div className='mb-3 mb-md-5'>
        <Container >
          <Row className='justify-content-center g-2 g-sm-3 g-md-4'>
            <Col xs={12} md={8} className='home-carousel-col'>
              <Carousel data-bs-theme="white">
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={Sonos}
                    alt="First slide"
                    rounded
                    style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'cover' }}
                  />
                  <Carousel.Caption className="text-caption" style={{ textAlign: 'left', color: 'black' }}>
                    <h5 style={{ fontSize: 'clamp(11px, 3.5vw, 18px)' }}>First slide label</h5>
                    <p style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={addbg}
                    alt="Second slide"
                    rounded
                    style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'cover' }}
                  />
                  <Carousel.Caption className="text-caption">
                    <div className='font' style={{ textAlign: 'left', padding: 'clamp(0.25rem, 2vw, 1.5rem)' }}>
                      <h2 className='text-white' style={{ fontSize: 'clamp(13px, 4vw, 28px)', marginBottom: '0.2rem' }}>The Westmire</h2>
                      <h2 className='text-white' style={{ fontSize: 'clamp(11px, 3.5vw, 24px)', marginBottom: '0.2rem' }}>
                        <span><b>A56 Headset</b></span>
                      </h2>
                      <h5 className='text-white' style={{ fontSize: 'clamp(10px, 2.5vw, 16px)', marginBottom: 'clamp(0.3rem, 1vw, 0.5rem)' }}>Today: <b style={{ color: '#FFDE59', fontSize: 'clamp(13px, 4vw, 40px)' }}>29.99$</b></h5>
                      <div className='d-flex flex-wrap gap-1 gap-sm-2'>
                        <Button className='rounded-pill' variant='none' style={{ background: '#122e3c', fontSize: 'clamp(9px, 2vw, 11px)', padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.6rem, 2vw, 1rem)' }}>
                          <Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
                            <b>Buy Now</b><i className="fas" style={{ marginLeft: '5px' }}>
                              <FontAwesomeIcon icon={faArrowRight} />
                            </i>
                          </Link>
                        </Button>
                        <Button className='rounded-pill' variant='none' style={{ color: 'black', background: 'rgba(207, 205, 189, 0.4)', fontSize: 'clamp(9px, 2vw, 11px)', padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.6rem, 2vw, 1rem)' }}>
                          <b>Shop Now</b>
                        </Button>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col xs={12} md={4} className='home-side-col'>
              <Row className='g-2 g-sm-3'>
                <Col xs={12}>
                  <div style={{ position: 'relative' }}>
                    <Image src={phone} rounded style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    <Button className='rounded-pill buy-now-button' variant='none' style={{ position: 'absolute', bottom: 'clamp(8px, 2vw, 15px)', left: 'clamp(10px, 3vw, 18px)', background: '#122e3c', fontSize: 'clamp(8px, 2vw, 9px)', padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem)' }}>
                      <Link to='/checkout' style={{ textDecoration: 'none', color: 'white' }}>
                        <b>Buy Now</b><i className="fas" style={{ marginLeft: '3px', color: 'white' }}>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row className='g-2 g-sm-3 mt-1 mt-sm-2'>
                <Col xs={12}>
                  <div style={{ position: 'relative' }}>
                    <Image src={phone2} rounded style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'cover' }} />
                    {/* Original hardcoded this at left:190px, which only
                        lined up on one exact desktop width and pushed the
                        button off-screen on any narrower device. Anchored
                        to the right edge instead - same visual spot on
                        desktop, stays inside the image on phones. */}
                    <Button className='rounded-pill buy-now-button buy-now-button-2' variant='none' style={{ position: 'absolute', bottom: 'clamp(8px, 2vw, 8px)', right: 'clamp(10px, 3vw, 15px)', background: '#ffffff', fontSize: 'clamp(8px, 2vw, 9px)', padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem)' }}>
                      <Link to='/checkout' style={{ textDecoration: 'none', color: 'black' }}>
                        <b>Buy Now</b><i className="fas" style={{ marginLeft: '3px' }}>
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