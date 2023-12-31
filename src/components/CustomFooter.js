import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CustomFooter.css'; // Custom CSS file

function CustomFooter() {
    return (
        <footer className="custom-footer">
            <Container>
                <Row>
                    <Col xs={12} md={4} className="footer-section">
                        <h4>About Us</h4>
                        <p>Your company's mission and description can go here.</p>
                    </Col>
                    <Col xs={12} md={4} className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                    <Col xs={12} md={4} className="footer-section">
                        <h4>Follow Us</h4>
                        <p>Stay connected with us on social media.</p>
                        {/* Add your social media icons/links here */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default CustomFooter;
