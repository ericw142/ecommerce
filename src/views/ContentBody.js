import React, { useState } from 'react';
import { Locations } from './Locations';
import { About } from './About';
import { Careers } from './Careers';
import { Contact } from './Contact';
import { Storefront } from './Storefront';
import { Cart } from './Cart';
import { Carousel } from 'react-bootstrap';

import heroImage1 from '../carousel-images/paul-gaudriault-TVxI-vkmTLI-unsplash.jpg';
import heroImage2 from '../carousel-images/kristina-balic-M13V8hgvm-E-unsplash.jpg';
import heroImage3 from '../carousel-images/heather-ford-FbrDS0jY_Hw-unsplash.jpg';

const images = [
    {
        description: 'Indulge in the epitome of self-care with our exquisite collection of handcrafted soaps. Each bar of soap meticulously crafted to elevate your daily bathing routine.',
        src: heroImage1
    },
    {
        description: 'Immerse yourself in nature-inspired scents, from the calming Lavender Blossom to the energizing Citrus Serenade.',
        src: heroImage2,
    },
    {
        description: "Our soaps are more than just cleansing agents, they're a luxurious escape, a treat for your skin, and a celebration of the small moments that bring joy to your day.",
        src: heroImage3,
    },
];

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
                                <Carousel>
                                    {images.map((image) => {
                                        return (
                                            <Carousel.Item>
                                                <img className='box-shadow' height="auto" width="100%" src={image.src} alt=""></img>
                                                <Carousel.Caption className='carousel-caption-bg'>
                                                    <h3 className="hero-title">Luxurious Soaps for a Blissful Bathing Experience</h3>
                                                    <p>{image.description}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col p-5' style={{textAlign: 'start'}}>
                            <h1 className="hero-title">Luxurious Soaps for a Blissful Bathing Experience</h1>
                            <p>
                                Indulge in the epitome of self-care with our exquisite collection of handcrafted soaps. Each bar is a work of art, meticulously crafted to elevate your daily bathing routine. 
                                Immerse yourself in nature-inspired scents, from the calming Lavender Blossom to the energizing Citrus Serenade. Our soaps are more than just cleansing agents, they're a luxurious escape, a treat for your skin, 
                                and a celebration of the small moments that bring joy to your day.
                            </p>
                            <hr />
                            <p>Our soaps are crafted with care, using only the finest ingredients to provide your skin with the love and attention it deserves.</p>
                        </div>
                    </div> */}
                    <div className='row'>
                        <div className='col p-5' style={{textAlign: 'start'}}>
                            <p>
                                Curious about the heart behind our brand? Discover more in the About section, where our passion for crafting indulgent soaps comes to life. If you're considering a career with us or simply wish to get in touch, 
                                navigate to our Careers and Contact pages for more information. Your path to blissful bathing and exciting opportunities begins here – click, explore, and elevate your experience with us!
                            </p>
                            <p><strong>Note</strong> - this is an mock e-commerce webpage created by Eric Warshawsky. All images are sourced from <a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>. Products shown are not available for purchase.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}   