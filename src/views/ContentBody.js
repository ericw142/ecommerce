import React from 'react';
import { Locations } from './Locations';
import { About } from './About';
import { Careers } from './Careers';
import { Contact } from './Contact';
import { Storefront } from './Storefront';
import { Cart } from './Cart';

export const ContentBody = ({ selectedView, setSelectedView, locations }) => {
    return (
        <div className="content-body">
            {selectedView === 'Storefront' ? (
                <Storefront locations={locations}/>
            ) : selectedView === 'Cart' ? (
                <Cart />
            ) : selectedView === 'Locations' ? (
                <Locations locations={locations}/>
            ) : selectedView === 'About' ? (
                <About />
            ) : selectedView === 'Careers' ? (
                <Careers />
            ) : selectedView === 'Contact' ? (
                <Contact />
            ) : (
                <div className='row'></div>
            )}
        </div>
    )
}   