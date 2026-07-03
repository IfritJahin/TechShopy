import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Bg from '../img/Bg.mp4'
import nbg from '../img/download.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone as faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Nav, Tabs, Tab, Image, CardBody } from 'react-bootstrap';
function Contact() {
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <video autoPlay muted loop id="background-video" className="w-100 vh-100 position-fixed top-0 left-0">
                <source src={Bg} type="video/mp4" />
            </video>
            <Card className='' style={{ backgroundImage: `url(${nbg})`, border: 0, height: '622px', width: '350px', marginBottom: '20px' }}>
                <Card.Header style={{ border: 0, background: 'none', color: 'white', textAlign: 'center', marginTop: '40px' }}>
                    <h2>Contact Us</h2>
                </Card.Header>
                <Card.Body className='m-3'>
                    <Row xs="auto" style={{ justifyContent: 'center' }}>
                        <Col className=''><FontAwesomeIcon icon={faPhone} shake size="lg" style={{ color: '#ffffff' }} /></Col>
                        <Col className='mb-3' style={{ color: '#ffffff' }}>01999999</Col>
                    </Row>
                    <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#dadada', justifyContent: 'center' }} className='mb-3' />
                    <Row xs="auto" style={{ justifyContent: 'center' }}>
                        <Col className=''><FontAwesomeIcon icon={faEnvelope} bounce size="lg" style={{ color: "#ffffff", }} /></Col>
                        <Col className='mb-3' style={{ color: '#ffffff' }}>hello@gmail.com</Col>
                    </Row>
                    <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#dadada', justifyContent: 'center' }} />
                </Card.Body>
            </Card >
        </div >
    )
}

export default Contact
