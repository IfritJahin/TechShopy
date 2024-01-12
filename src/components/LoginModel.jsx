import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import loginbg from '../img/loginbg.png'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup } from 'react-bootstrap';
import Reg from './Reg';
function LoginModel(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Card className='' style={{ borderRadius: 0 }}>
                <Card.Body style={{ backgroundColor: '#F8F8F8', backgroundPosition: 'center' }}>
                    <Card.Title className='mt-3 mb-4 text-center' style={{ fontFamily: 'inherit', fontSize: '30px' }}>LOGIN</Card.Title>
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
                                <Col xs={12} md={4} className='text-md-left text-center mb-2'>
                                    <Link className='text-decoration-none'>Forgot Password?</Link>
                                </Col>
                            </Row>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="none" className='rounded-pill' size="lg" style={{ color: 'white', background: 'rgba(10,27,52,1)' }}>Log in</Button>
                        </div>
                    </Form>
                    <div className='mt-4 mb-2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#dadada', marginRight: '10px' }} />
                        <p style={{ margin: '0 10px', textAlign: 'center', color: '#343437' }}>OR</p>
                        <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#dadada', marginLeft: '10px' }} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button type="button" variant="none" className='d-flex justify-content-center  mt-3 mb-3 rounded-pill' size="lg" style={{ color: 'white', background: '#122e3c' }}>
                            <Link to='/myaccount' style={{ textDecoration: 'none', color: 'white' }} onClick={props.onHide}>Create Account</Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Modal>
    )
}

export default LoginModel
