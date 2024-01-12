import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Bg from '../img/Bg.mp4'
import nbg from '../img/nbg.jpg'
import conImage from '../img/con2.png';
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Nav, Tabs, Tab, Image, CardBody } from 'react-bootstrap';
function Help() {
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <video autoPlay muted loop id="background-video" className="w-100 vh-100 position-fixed top-0 left-0">
                <source src={Bg} type="video/mp4" />
            </video>
            <Card className='' style={{ backgroundImage: `url(${conImage})`, border: 0, height: '622px', width: '350px', marginBottom: '20px' }}>
                <Card.Header style={{ border: 0, background: 'none', color: 'white', textAlign: 'center', marginTop: '20px' }}>
                    <h4> OUR SERVICES</h4>
                </Card.Header>
                <Card.Body>
                    <Container style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)', border: 0, height: '300px', width: '250px',
                        marginBottom: '20px', justifyContent: 'center', margin: '50px',
                        marginLeft: '35px', marginTop: '75px',
                    }}>
                        <Card.Body style={{ opacity: '100%', justifyContent: 'center' }}>
                            <Button className="rounded-pill  mb-2" variant='none' style={{ backgroundColor: '#F8F3EF', width: '200px', height: '50px', color: 'black', textAlign: 'center' }}>
                                Free Delivery
                            </Button>
                            <Button className="rounded-pill mb-2" variant='none' style={{ backgroundColor: '#F8F3EF', width: '200px', height: '50px', color: 'black', textAlign: 'center' }}>
                                Monthly Servicing
                            </Button>
                            <Button className="rounded-pill mb-2" variant='none' style={{ backgroundColor: '#F8F3EF', width: '200px', height: '50px', color: 'black', textAlign: 'center' }}>
                                Managment
                            </Button>
                        </Card.Body>
                    </Container>
                </Card.Body>
            </Card >
        </div >
    )
}

export default Help
