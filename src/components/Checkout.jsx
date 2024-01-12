import React from 'react'
import paycard from '../img/paycard.png'
import BgImage from '../img/pbg.jpg'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Image, CardBody } from 'react-bootstrap';

function Checkout() {
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <img
                src={BgImage}
                alt="Background Image"
                className="w-100 vh-100 position-fixed top-0 left-0"
                style={{ objectFit: 'cover' }}
            />
            <Card className='' style={{ backgroundImage: `url(${paycard})`, border: 0, height: '459px', width: '770px', marginBottom: '20px' }}>

            </Card>
        </div>
    )
}

export default Checkout
