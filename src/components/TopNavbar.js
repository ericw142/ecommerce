import React from 'react';
import { FaShop } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const TopNavbar = ({ selectedView, setSelectedView, cart }) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="site-navbar">
                <Navbar.Brand>
                    <button className='button-site-header mx-auto white-text' onClick={() => setSelectedView('')}>
                        E-Commerce Site
                    </button>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#locations" onClick={() => setSelectedView('Locations')}><span className='white-text'>Locations</span></Nav.Link>
                    <Nav.Link href="#about" onClick={() => setSelectedView('About')}><span className='white-text'>About</span></Nav.Link>
                    <Nav.Link href="#careers" onClick={() => setSelectedView('Careers')}><span className='white-text'>Careers</span></Nav.Link>
                    <Nav.Link href="#contact" onClick={() => setSelectedView('Contact')}><span className='white-text'>Contact</span></Nav.Link>
                    </Nav>
                <Nav>
                    {selectedView === 'Storefront' ? (
                        <Nav.Link href="#" onClick={() => setSelectedView('Cart')}>
                            <p className='white-text m-0'>Cart <HiMiniShoppingCart /><span className='cart-items-indicator'>{cart?.products?.length > 0 ? `( ${cart.products.length} )` : ''}</span></p>
                        </Nav.Link>
                    ) : (
                        <Nav.Link href="#" onClick={() => setSelectedView('Storefront')}>
                            <p className='white-text m-0'>Store <FaShop /></p>
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}