collapseOnSelect
{
    isScrolled ? (

    ): (
            <Navbar collapseOnSelect expand = "lg" className = "d-flex align-items-center justify-content-between px-3 py-0">
        <Link to = '/Temp/'>
            <Navbar.Brand>
                <img className = "mr-3" style = {{ width: '100px', marginLeft: '40px' }} src = { BL } alt = "Logo" />
            </Navbar.Brand >
        </Link >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className=" d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1" >
                <Link to='/Temp/' className='nav-link text-white text-decoration-none m-3'>Home</Link>
                <Link to='/shop' className='nav-link text-white text-decoration-none m-3'>Shop</Link>
                <Link to='/products' className='nav-link text-white text-decoration-none m-3'>Products</Link>
                <Link to='/contact' className='nav-link text-white  text-decoration-none m-3'>Contact</Link>
                <Link to='/help' className='nav-link text-white text-decoration-none m-3'>Help & Support</Link>

                <div className="dropdown">
                    <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Categories
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">All Categories</a>
                        <a className="dropdown-item" href="#">Laptops</a>
                        <a className="dropdown-item" href="#">Phones</a>
                        {/* ... other items ... */}
                    </div>
                </div>
            </Nav>
            <Nav>
                <section id='icons' className="d-flex align-items-center px-1 text-white" >
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center m-3" onClick={() => setModalShow(true)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '25px', verticalAlign: 'middle' }} />
                        </div>
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
                            <Button variant='none' style={{ position: 'relative' }} >
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

                        </div>

                        <div className="d-flex align-items-center m-3">
                            <FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: '25px' }} />
                        </div>
                    </div>
                </section>
            </Nav>
        </Navbar.Collapse>
    </Navbar >

)}