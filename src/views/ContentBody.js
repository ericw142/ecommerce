import React, { useState } from 'react';
import { Locations } from './Locations';
import { About } from './About';
import { Careers } from './Careers';
import { Contact } from './Contact';
import { Storefront } from './Storefront';
import { Cart } from './Cart';
import heroImage from '../paul-gaudriault-TVxI-vkmTLI-unsplash.jpg';

export const ContentBody = ({ selectedView, setSelectedView, locations, cart, setCart }) => {
    const [selectedStorefront, setSelectedStorefront] = useState('');

    return (
        <div className="content-body">
            {selectedView === 'Storefront' ? (
                <Storefront locations={locations} selectedStorefront={selectedStorefront} setSelectedStorefront={setSelectedStorefront} cart={cart} setCart={setCart} />
            ) : selectedView === 'Cart' ? (
                <Cart cart={cart} setCart={setCart} />
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
                                {/* <div className='overlay-text'></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col'></div>
                        <div className='col-10' style={{textAlign: 'start'}}>
                        <h1 className="hero-title">Luxurious Soaps for a Blissful Bathing Experience</h1>
                        <p>
                                Indulge in the epitome of self-care with our exquisite collection of handcrafted soaps. Each bar is a work of art, meticulously crafted to elevate your daily bathing routine. 
                                Immerse yourself in nature-inspired scents, from the calming Lavender Blossom to the energizing Citrus Serenade. Our soaps are more than just cleansing agents, they're a luxurious escape, a treat for your skin, 
                                and a celebration of the small moments that bring joy to your day.
                            </p>
                            <hr />
                            <p className='text-center'>Our soaps are crafted with care, using only the finest ingredients to provide your skin with the love and attention it deserves.</p>
                            <p style={{marginTop: '100px'}}>
                                Curious about the heart behind our brand? Discover more in the About section, where our passion for crafting indulgent soaps comes to life. If you're considering a career with us or simply wish to get in touch, 
                                navigate to our Careers and Contact pages for more information. Your path to blissful bathing and exciting opportunities begins here – click, explore, and elevate your experience with us!
                            </p>
                            <p><strong>Note</strong> - this is an mock e-commerce webpage created by Eric Warshawsky. All images are sourced from <a href="https://unsplash.com/" target="_blank">Unsplash</a>. Products shown are not available for purchase.</p>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            )}
        </div>
    )
}   