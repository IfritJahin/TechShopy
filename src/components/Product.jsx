
import React, { useEffect, useState } from 'react';
import product from '../img/pproduct.mp4'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Image, CardBody, ListGroup } from 'react-bootstrap';
import '../assets/product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faBars as faBars, faCartShopping, faStar, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import Home_p from './Home_p';
import { Link } from 'react-router-dom'
import '../assets/home.css'
function Product() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategorySelect = (category) => {
        // Toggle the selected category
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category)
                : [...prevCategories, category]
        );
    };

    const filterProductsByCategory = () => {
        // If no categories are selected, show all products
        if (selectedCategories.length === 0) {
            return Home_p;
        }

        // Filter products based on selected categories
        return Home_p.filter((product) =>
            selectedCategories.some((cat) => product.cat.includes(cat))
        );
    };
    const colors = ['Black', 'Grey', 'Red', 'Blue'];
    const iconColors = {
        Black: '#000000',
        Grey: '#e3e3e3',
        Red: '#ff0000',
        Blue: '#0000ff',
    }
    return (
        <div className=''>
            <div className='product-container'>
                <div className="video-wrapper embed-responsive embed-responsive-16by9">
                    <video className="video-item embed-responsive-item" autoPlay loop muted>
                        <source src={product} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Container >
                <Row >
                    <Col sm={4} className="pr-md-2">
                        <Card className='mt-4 mb-3' style={{ width: '18rem' }}>
                            <Card.Body>
                                <b>Product Catagories</b>
                                <ListGroup.Item>
                                    <Form>
                                        {['Accessories', 'Laptop & Ipad', 'TV & Audios', 'SmartPhone & Tabltes'].map((type) => (
                                            <div key={type} className="mb-3 mt-3">
                                                <Form.Check
                                                    className="custom-checkbox"
                                                    style={{ color: '#122e3c' }}
                                                    type={type}
                                                    id={`${type}`}
                                                    variant='none'
                                                >
                                                    <Form.Check.Input
                                                        style={{ color: '#122e3c' }}
                                                        type='checkbox'
                                                        isValid
                                                        checked={type === 'Accessories' || selectedCategories.includes(type)}
                                                        onChange={() => handleCategorySelect(type)}
                                                    />
                                                    <Form.Check.Label style={{ color: '#122e3c' }}>{`${type}`}</Form.Check.Label>
                                                </Form.Check>
                                            </div>
                                        ))}
                                    </Form>

                                </ListGroup.Item>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Price
                                    <Form  >
                                        {['Accessories', 'Laptop & Ipad', 'TV & Audios', 'SmartPhone & Tabltes'].map((type) => (
                                            <div key={type} className="mb-3 mt-3" >
                                                <Form.Check className="custom-checkbox" style={{ color: '#122e3c' }} type={type} id={`${type}`} variant='none' >
                                                    <Form.Check.Input style={{ color: '#122e3c' }} type='checkbox' isValid />
                                                    <Form.Check.Label style={{ color: '#122e3c' }}>{`${type}`}</Form.Check.Label>

                                                </Form.Check>
                                            </div>
                                        ))}
                                    </Form>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>Colors</b>

                                    <Row>
                                        <Col xs={6}>                        <Form>
                                            {colors.map((color) => (
                                                <div key={color} className="mb-3 mt-3 d-flex align-items-center">
                                                    <Form.Check className="custom-checkbox" type={color} id={`${color}`} variant='none'>
                                                        <Form.Check.Input type='checkbox' isValid />
                                                        <Form.Check.Label style={{ color: '#122e3c', }}>
                                                            {`${color}`}

                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </div>
                                            ))}
                                        </Form></Col>
                                        <Col xs={6}>
                                            <div className="mb-3 mt-3">
                                                {colors.map((color) => (
                                                    <FontAwesomeIcon key={color} icon={faCircle} style={{ color: iconColors[color], marginRight: '10px' }} />
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={8} className='mt-4 mb-3 pl-md-2'>
                        <Row ><Col sm={12} className='pl-md-2 w-100'><Card><Card.Header> {selectedCategories.length > 0 ? `${selectedCategories.join(', ')}` : 'All'}</Card.Header></Card></Col></Row>
                        <Row>
                            <Col sm={12} className='mt-4 mb-3 pl-md-2'>
                                <Row>
                                    {filterProductsByCategory().map((curElement) => (
                                        <Col key={curElement.id} xs={10} md={8} lg={6} xl={4} className="mb-4">
                                            <Card className='box mb-4' style={{ width: '15rem', maxHeight: '100%' }}>
                                                <Card.Img variant="top" className='img' style={{ maxHeight: '288px' }} src={curElement.img} alt='' />
                                                <Card.Body className='card_body'>
                                                    <Card.Title className="box-title" ><h6>{curElement.Name || 'Product Name'}</h6></Card.Title>
                                                    <Card.Text className="box-description " style={{ maxHeight: '48px' }}><h7>{curElement.type || 'Product Description'}</h7></Card.Text>
                                                    <Card.Text className="box-price"><h6>Price: {curElement.price}</h6></Card.Text>
                                                    <Rating
                                                        className='align-items-center'
                                                        emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#fae500" }} />}
                                                        fullSymbol={<FontAwesomeIcon icon={faStar} style={{ color: "#dde000" }} />}
                                                    />
                                                    <div className="hover-icons">
                                                        <div className='d-flex justify-content-center'>
                                                            <Link to='/checkout'>
                                                                <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: '3rem', width: '3em', }}>
                                                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", fontSize: '15px' }} />
                                                                </Button>
                                                            </Link>
                                                            <Button variant='none' className='rounded-circle align-items-center m-2' style={{ background: '#122e3c', height: '3rem', width: '3em' }}>
                                                                <FontAwesomeIcon icon={faHeart} style={{ color: "white", fontSize: '15px' }} />
                                                            </Button>
                                                        </div>
                                                        <Button variant="none" className='rounded-pill mt-3' style={{ color: 'white', background: '#122e3c' }}>Select Options</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col></Row>

                    </Col>
                </Row>
            </Container>

        </div>


    )
}

export default Product
