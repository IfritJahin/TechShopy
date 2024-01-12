import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Abg from '../img/Abg.mp4'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Nav, Tabs, Tab } from 'react-bootstrap';
function Reg() {
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <video autoPlay muted loop id="background-video" className="w-100 vh-100 position-fixed top-0 left-0">
                <source src={Abg} type="video/mp4" />
            </video>
            <Card style={{ backgroundColor: '#F8F8F8', width: '30rem', marginBottom: '20px' }}>
                <Tabs
                    defaultActiveKey="Registration"
                    id="uncontrolled-tab-example"
                    className="mt-5 mb-3 d-flex justify-content-center"
                    variant="underline"
                >
                    <Tab eventKey="Registration" title="Registration">
                        <Card.Body >
                            <Card.Title className=' mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: '30px' }}>REGISTRATION</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your name"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Your Mail"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="password"
                                        placeholder="Create a Password"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm a Password"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Row>
                                        <Col>
                                            <Form.Check
                                                type="checkbox"
                                                label="I accept terms & conditions"
                                                id="rememberMeCheckbox"
                                            />
                                        </Col>

                                    </Row>
                                </Form.Group>
                                <div className="d-grid gap-2 ">
                                    <Button type="submit" variant="none" className='rounded-pill' size="lg" style={{ color: 'white', background: 'rgba(10,27,52,1)', }}>Register Now</Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="Login" title="Login">

                        <Card.Body >
                            <Card.Title className='mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: '30px' }}>LOGIN</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className='rounded-pill'
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Row>
                                        <Col>
                                            <Form.Check
                                                type="checkbox"
                                                label="Remember me"
                                                id="rememberMeCheckbox"
                                            />
                                        </Col>
                                        <Col xs={4} className='text-left'>
                                            <Link className='text-decoration-none '>Forgot Password?</Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <div className="d-grid gap-2 ">
                                    <Button type="submit" variant="none" className='rounded-pill' size="lg" style={{ color: 'white', background: 'rgba(10,27,52,1)', }}>Log in</Button>
                                </div>
                            </Form>

                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card>

        </div>

    )
}

export default Reg
