import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css'; // Custom CSS file

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar
            expand="lg"
            className={expanded ? 'navbar-expanded' : ''}
            variant="dark"
            bg="dark"
        >
            <Container>
                <Navbar.Brand href="/" className="brand-name">Your Brand</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={toggleNavbar}
                />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category1">Category 1</NavDropdown.Item>
                            <NavDropdown.Item href="/category2">Category 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/all-categories">All Categories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
