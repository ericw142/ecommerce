import React from 'react';
import { FaShop } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const TopNavbar = ({ selectedView, setSelectedView, cart }) => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand>
                    <button className='button-site-header mx-auto' onClick={() => setSelectedView('')}>
                        E-Commerce Site
                    </button>
                </Navbar.Brand>
                {selectedView === 'Storefront' ? (
                    <Nav.Link href="#" onClick={() => setSelectedView('Cart')}>
                        <p>Cart <HiMiniShoppingCart /><span className='cart-items-indicator'>{cart?.products?.length > 0 ? `( ${cart.products.length} )` : ''}</span></p>
                    </Nav.Link>
                    ) : (
                        <Nav.Link href="#" onClick={() => setSelectedView('Storefront')}>Store <FaShop /></Nav.Link>
                    )}
            </Container>
        </Navbar>
    )
}