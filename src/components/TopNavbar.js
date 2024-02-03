import React from 'react';
import { FaShop } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const TopNavbar = ({ selectedView, setSelectedView, cart }) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand>
                        <button className='button-site-header mx-auto' onClick={() => setSelectedView('')}>
                            E-Commerce Site
                        </button>
                    </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#locations" onClick={() => setSelectedView('Locations')}>Locations</Nav.Link>
                    <Nav.Link href="#about" onClick={() => setSelectedView('About')}>About</Nav.Link>
                    <Nav.Link href="#careers" onClick={() => setSelectedView('Careers')}>Careers</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => setSelectedView('Contact')}>Contact</Nav.Link>
                    </Nav>
                <Nav>
                    {selectedView === 'Storefront' ? (
                        <Nav.Link href="#" onClick={() => setSelectedView('Cart')}>
                            <p>Cart <HiMiniShoppingCart /><span className='cart-items-indicator'>{cart?.products?.length > 0 ? `( ${cart.products.length} )` : ''}</span></p>
                        </Nav.Link>
                    ) : (
                        <Nav.Link href="#" onClick={() => setSelectedView('Storefront')}>Store <FaShop /></Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}