import React from 'react';
import { Locations } from './Locations';
import { About } from './About';
import { Careers } from './Careers';
import { Contact } from './Contact';

export const ContentBody = ({ selectedView, setSelectedView }) => {
    return (
        <div className="content-body">
            {selectedView === 'Locations' ? (
                <Locations />
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