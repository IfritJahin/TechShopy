import React, { useEffect, useState } from 'react';
import paycard from '../img/paycard.png'
import BgImage from '../img/pbg.jpg'
import { Button, Container, Card, Col, Form, Row, Modal, InputGroup, Image, CardBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBillTransfer, faTruck } from '@fortawesome/free-solid-svg-icons'
function Checkout() {
    const [selectedCategory, setSelectedCategory] = useState('Select-City');

    const handleCategorySelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
    };
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderAdditionalContent = () => {
        if (selectedOption === 'Option1') {
            return <Card className="mt-3" style={{ width: '400px', marginLeft: '10px' }}>
                <Card.Body>
                    <Card.Title style={{ color: 'rgba(10,27,52,1)' }}>Card Payment                                 <FontAwesomeIcon
                        icon={faCreditCard}
                        style={{ position: 'absolute', right: '12px', color: '#777' }}
                    /></Card.Title>
                    <Card.Text>
                        <p>Pay securely using your credit card</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Control
                                    placeholder="Enter your card number"
                                    className="rounded-pill"
                                    type="password"
                                    style={{ width: '300px', paddingRight: '40px' }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="date"
                                        className="rounded-pill"
                                        placeholder="First name"
                                        defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        className="rounded-pill"
                                        placeholder="Last name"
                                        defaultValue="Otto"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>;
        } else if (selectedOption === 'Option2') {
            return <Card className="mt-3" style={{ width: '400px', marginLeft: '10px' }}>
                <Card.Body>
                    <Card.Title style={{ color: 'rgba(10,27,52,1)' }}>Online Payment <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ position: 'absolute', right: '12px', color: '#777' }} /></Card.Title>
                    <Card.Text>
                        <p>Pay securely using your Bkash number</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                <Form.Control
                                    placeholder="Enter your phone number"
                                    className="rounded-pill"
                                    type="number"
                                    style={{ width: '300px', paddingRight: '40px' }}
                                    autoFocus
                                />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="Password"
                                        className="rounded-pill"
                                        placeholder="Enter your pin"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="Number"
                                        className="rounded-pill"
                                        placeholder="BDT"
                                        defaultValue="0"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>;
        }
        else if (selectedOption === 'Option3') {
            return <p style={{ width: '400px', marginLeft: '10px', textAlign: 'center' }}>Cash On delivery</p>;
        } else {
            return null;
        }
    }; useEffect(() => {
        // Set the default selected option when the component mounts
        setSelectedOption('Option1');
    }, []);
    return (
        <div className='card-below-header d-flex justify-content-center '>
            <img
                src={BgImage}
                alt="Background Image"
                className="w-100 vh-100 position-fixed top-0 left-0"
                style={{ objectFit: 'cover' }}
            />
            <Card
                className={`d-flex justify-content-center align-items-${selectedOption === 'Option3' ? 'start' : 'left'}`}
                style={{ backgroundImage: `url(${paycard})`, border: 0, width: '770px', marginBottom: '20px', height: selectedOption === 'Option3' ? '660px' : '800px' }}
            >
                <Card.Title ><h2 style={{ width: '400px', marginLeft: '10px', textAlign: 'center' }}>Checkout</h2></Card.Title>
                <Form >
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="Enter your name"
                            className='rounded-pill'
                            style={{ width: '400px', marginLeft: '10px' }}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="email"
                            placeholder="Enter Your Mail"
                            className='rounded-pill'
                            style={{ width: '400px', marginLeft: '10px' }}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                        <Form.Control
                            as="select"
                            className="rounded-pill"
                            value={selectedCategory}
                            onChange={handleCategorySelect}
                            style={{ width: '400px', marginLeft: '10px' }}
                        >
                            <option value="Select-City">Select-City</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            {/* ... other items ... */}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="password"
                            placeholder="Current Adddress"
                            className='rounded-pill'
                            style={{ width: '400px', marginLeft: '10px' }}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group controlId="" className="d-flex ">
                        <Card
                            className={`rounded-pill option-card ${selectedOption === 'Option1' ? 'selected' : ''} mb-3`}
                            onClick={() => handleOptionSelect({ target: { value: 'Option1' } })}
                            style={{ width: '200px', marginLeft: '10px' }}
                        >
                            <Card.Body>
                                <Form.Check
                                    type="radio"
                                    label="Card Payment"
                                    value="Option1"
                                    checked={selectedOption === 'Option1'}
                                    onChange={handleOptionSelect}

                                />
                            </Card.Body>
                        </Card>

                        <Card
                            className={`rounded-pill option-card ${selectedOption === 'Option2' ? 'selected' : ''} mb-3`}
                            onClick={() => handleOptionSelect({ target: { value: 'Option2' } })}
                            style={{ width: '200px', marginLeft: '10px' }}
                        >
                            <Card.Body>
                                <Form.Check
                                    type="radio"
                                    label="Online Payment"
                                    value="Option2"
                                    checked={selectedOption === 'Option2'}
                                    onChange={handleOptionSelect}
                                />
                            </Card.Body>
                        </Card>


                    </Form.Group>
                    <Form.Group className="rounded-pill mb-4" >
                        <Card className={`rounded-pill option-card ${selectedOption === 'Option3' ? 'selected' : ''} mb-3`}
                            onClick={() => handleOptionSelect({ target: { value: 'Option3' } })} style={{ width: '400px', marginLeft: '10px' }}>
                            <Row>
                                <Col sm={6}>
                                    <Form.Check
                                        type="radio"
                                        label="Cash On Delivery"
                                        id="rememberMeCheckbox"
                                        value="Option3"
                                        checked={selectedOption === 'Option3'}
                                        onChange={handleOptionSelect}
                                        style={{ width: '400px', marginLeft: '10px' }}
                                    />

                                </Col>
                                <Col sm={4}>
                                    <FontAwesomeIcon icon={faTruck} style={{ position: 'absolute', right: '12px', color: '#777', top: '4px' }} />
                                </Col>

                            </Row>

                        </Card>

                    </Form.Group>
                    {renderAdditionalContent()}


                    <Form.Group className="mb-4">
                        <Row>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="I accept terms & conditions"
                                    id="rememberMeCheckbox"
                                    style={{ width: '400px', marginLeft: '10px' }}
                                />
                            </Col>

                        </Row>
                    </Form.Group>
                    <div className="d-grid gap-2 ">
                        <Button type="submit" variant="none" className='rounded-pill' size="lg" style={{ color: 'white', background: 'rgba(10,27,52,1)', width: '400px', marginLeft: '10px' }}>Place Order</Button>
                    </div>

                </Form>
            </Card>
        </div>
    )
}

export default Checkout
