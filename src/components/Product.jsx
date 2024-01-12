import React from 'react'
import product from '../img/pproduct.mp4'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Image, CardBody, ListGroup } from 'react-bootstrap';
import '../assets/product.css';
function Product() {
    return (
        <div className=''>
            <div className='product-container'>
                <div className="video-wrapper embed-responsive embed-responsive-16by9">
                    <video className="video-item embed-responsive-item" autoPlay loop muted>
                        <source src={product} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Card className='mt-4 mb-3' style={{ width: '18rem', marginLeft: '80px' }}>
                <Card.Body>

                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>


    )
}

export default Product
