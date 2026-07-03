import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import BL from '../img/bl2.png'
import sg from '../img/abg.jpg'
import LoginModel from './LoginModel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'

import { Button, Container, Card, Navbar, Col, Form, Row, Nav, NavDropdown, Modal, FormControl, Offcanvas, InputGroup } from 'react-bootstrap';
import '../assets/home.css';
function Header({ onSearch }) {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
        handleClose();
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [modalShow, setModalShow] = React.useState(false);
    const [Show, SetShow] = useState(false);

    const handleCloser = () => SetShow(false);
    const handleShower = () => SetShow(true);
    const [showModal, setShowModal] = useState(false);

    const handleViewCartClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" fixed="top" style={{ backgroundImage: 'linear-gradient(95deg, rgba(10,32,45,1) 0%, rgba(18,46,60,1) 29%, rgba(19,45,59,1) 48%, rgba(17,51,69,1) 73%, rgba(12,35,48,1) 100%)', }} className="">

                <Container fluid >
                    <Navbar.Toggle aria-controls="navbarScroll" variant='none'>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#FFffff", border: '0px', fontSize: '25px' }} />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="navbarScroll">
                        <Link to='/TechShopy/'>
                            <Navbar.Brand>
                                <img className="mr-3" style={{ width: '80px', marginLeft: '40px' }} src={BL} alt="Logo" />
                            </Navbar.Brand>
                        </Link>
                        <Nav className="d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1" >
                            <Link to='/TechShopy/' className='nav-link text-white text-decoration-none m-3'>Home</Link>
                            <Link to='/products' className='nav-link text-white text-decoration-none m-3'>Products</Link>
                            <Link to='/contact' className='nav-link text-white  text-decoration-none m-3'>Contact</Link>
                            <Link to='/help' className='nav-link text-white text-decoration-none m-3'>Help & Support</Link>

                            <div className="dropdown">
                                <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Categories
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to='./products' className="dropdown-item" href="">All Categories</Link>
                                    <Link to='./products' className="dropdown-item" href="#">Laptops</Link>
                                    <Link to='./products' className="dropdown-item" href="#">Phones</Link>
                                    {/* ... other items ... */}
                                </div>
                            </div>
                        </Nav>
                        <Nav>
                            <section id='icons' className="d-flex align-items-center px-1 text-white" >
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center" >
                                        <Button variant="none" className='text-decoration-none text-dark' onClick={handleShow} >
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '25px', verticalAlign: 'middle' }} />
                                        </Button>
                                        <Modal className='rounded-pill' show={show} onHide={handleClose}>
                                            <Modal.Body style={{}} >

                                                <Form className='d-flex'>
                                                    <FormControl
                                                        className='rounded-pill'
                                                        type="text"
                                                        placeholder="Search"
                                                        value={searchTerm}
                                                        style={{ width: '500px' }}
                                                        onChange={handleChange}
                                                        onKeyPress={handleKeyPress}


                                                    />
                                                    <Button variant="none" onClick={handleSearch}>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' fade style={{ color: "#122e3c", }} />
                                                    </Button>

                                                </Form>
                                            </Modal.Body>
                                        </Modal>
                                        <div className="d-flex align-items-center ">
                                            <Button variant='none' className='text-decoration-none text-dark' onClick={() => setModalShow(true)}>
                                                <FontAwesomeIcon icon={faUser} style={{ color: "white", fontSize: '25px' }} />
                                            </Button>
                                            <LoginModel
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <Button variant='none' onClick={handleShower} style={{ position: 'relative' }} >
                                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '25px' }} />
                                                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                                                    style={{
                                                        color: 'white',
                                                        position: 'absolute',
                                                        height: '1.3rem',
                                                        width: '1.3rem',
                                                        bottom: 0,
                                                        right: '0',
                                                        transform: 'translate(5%, 5%)'

                                                    }}>3</div>
                                            </Button>
                                            <Offcanvas show={Show} onHide={handleCloser} backdrop="static" placement="end">
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>YOUR ORDER</Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                    <div className="d-grid gap-2">
                                                        <Button size='lg' variant='none' className="custom-button" onClick={handleViewCartClick}>
                                                            VIEW CART
                                                        </Button>

                                                        <Modal show={showModal} onHide={handleCloseModal}>

                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Cart</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                Add Items
                                                            </Modal.Body>
                                                        </Modal>
                                                        <Link to='./TechShopy/' style={{ width: '100%', display: 'block' }}>

                                                            <Button size='lg' variant='none' className='custom-button' style={{ width: '100%' }}>
                                                                CONTINUE SHOPPING
                                                            </Button>
                                                        </Link>
                                                        <Link to='/checkout' style={{ width: '100%', display: 'block' }} >
                                                            <Button size='lg' variant='none' style={{ width: '100%', background: '#FFDE59', color: 'white', borderRadius: 0 }}>
                                                                PROCEED TO CHECKOUT
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </Offcanvas.Body>
                                            </Offcanvas>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}


export default Header
