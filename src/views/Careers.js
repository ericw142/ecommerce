import React, { useState, useEffect } from 'react';
import { CareerPositionRow } from '../components/CareerPositionRow';

export const Careers = () => {
    const [displayMessage, setDisplayMessage] = useState(false);

    const careers = [
        {title: 'Driver', location: 'Baltimore, MD'},
        {title: 'Driver', location: 'Washington, D.C.'},
        {title: 'Junior Accountant', location: 'Baltimore, MD'},
        {title: 'Accounting Clerk', location: 'Baltimore, MD'},
        {title: 'Senior Accountant', location: 'Remote'},
        {title: 'Product Designer', location: 'Washington, D.C.'},
    ];

    useEffect(() => {
        if (displayMessage) {
            setTimeout(() => {
                setDisplayMessage(false);
            }, 5000);
        }
    }, [displayMessage]);

    return (
        <div className='content-body' style={{marginTop: '100px'}}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col text-start'>
                        <h2 className='body-main-header'>careers</h2>
                        <p><strong>If you have a passion for excellence and products, you could be the perfect fit for Ecommerce Site.</strong></p>
                        <p>Whether you're looking for entry level work or a senior role, Ecommerce Site offers a wide array of benefits such as:</p>
                        <ul className='list-no-marker'>
                            <li>Competitve Salary</li>
                            <li>Unlimited Time Off</li>
                            <li>Remote or In Person Work</li>
                            <li>Healthcare Benefits</li>
                        </ul>
                        <p>Feel free to contact us even if you do not see a job listing that matches your experience. We'd love to get in touch!</p>
                    </div>
                    <div className='col'>
                        {careers.map((el) => {
                            return <CareerPositionRow title={el.title} location={el.location} setDisplayMessage={setDisplayMessage}/>
                        })}
                    </div>
                </div>
                {displayMessage && (
                    <div className='row mt-2'>
                        <div className='col text-center'>
                            <p className='m-0'><strong>Note</strong> - this is an mock e-commerce webpage created by Eric Warshawsky. Careers listed are not real job opportunities.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}