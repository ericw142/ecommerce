import React, { useState } from 'react';
import { Locations } from './Locations';
import { About } from './About';
import { Careers } from './Careers';
import { Contact } from './Contact';
import { Storefront } from './Storefront';
import { Cart } from './Cart';
import heroImage from '../paul-gaudriault-TVxI-vkmTLI-unsplash.jpg';

export const ContentBody = ({ selectedView, setSelectedView, locations }) => {
    const [selectedStorefront, setSelectedStorefront] = useState('');

    return (
        <div className="content-body">
            {selectedView === 'Storefront' ? (
                <Storefront locations={locations} selectedStorefront={selectedStorefront} setSelectedStorefront={setSelectedStorefront} />
            ) : selectedView === 'Cart' ? (
                <Cart />
            ) : selectedView === 'Locations' ? (
                <Locations locations={locations} setSelectedView={setSelectedView} setSelectedStorefront={setSelectedStorefront} />
            ) : selectedView === 'About' ? (
                <About />
            ) : selectedView === 'Careers' ? (
                <Careers />
            ) : selectedView === 'Contact' ? (
                <Contact />
            ) : (
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div className="image-container">
                                <img src={heroImage} alt=""></img>
                                <div className='overlay-text'>
                                    <h1 class="hero-title">Luxurious Soaps for a Blissful Bathing Experience</h1>
                                    <p class="hero-text">
                                        Indulge in the epitome of self-care with our exquisite collection of handcrafted soaps. Each bar is a work of art, meticulously crafted to elevate your daily bathing routine into a sensorial journey. 
                                        Immerse yourself in nature-inspired scents, from the calming Lavender Blossom to the energizing Citrus Serenade. Our soaps are more than just cleansing agents, they're a luxurious escape, a treat for your skin, 
                                        and a celebration of the small moments that bring joy to your day.
                                    </p>
                                    <hr />
                                    <p class="hero-text">Our soaps are crafted with care, using only the finest ingredients to provide your skin with the love and attention it deserves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 mb-5'>
                        <div className='col'></div>
                        <div className='col-6'>
                            <p>
                                Curious about the heart behind our brand? Discover more in the About section, where our passion for crafting indulgent soaps comes to life. If you're considering a career with us or simply wish to get in touch, 
                                navigate to our Careers and Contact pages for more information. Your path to blissful bathing and exciting opportunities begins here – click, explore, and elevate your experience with us!
                            </p>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            )}
        </div>
    )
}   