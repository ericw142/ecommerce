import React from 'react';
import { CareerPositionRow } from '../components/CareerPositionRow';

export const Careers = () => {
    const careers = [
        {title: 'Driver', location: 'Baltimore, MD'},
        {title: 'Driver', location: 'Washington, D.C.'},
        {title: 'Junior Accountant', location: 'Baltimore, MD'},
        {title: 'Accounting Clerk', location: 'Baltimore, MD'},
        {title: 'Senior Accountant', location: 'Remote'},
        {title: 'Product Designer', location: 'Washington, D.C.'},
    ];
    return (
        <div className='content-body'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <h2 className='body-main-header'>careers</h2>
                        <p><strong>If you have a passion for excellence and generic products, you could be the perfect fit for ShopSite.</strong></p>
                        <p>Whether you're looking for entry level work or a senior role, ShopSite offers a wide array of benefits such as:</p>
                        <ul className='list-no-marker'>
                            <li>Competitve Salary</li>
                            <li>Unlimited Time Off</li>
                            <li>Remote or In Person Work</li>
                            <li>Healthcare Benefits</li>
                        </ul>
                        <p>Feel free to contact us even if you do not see a job listing that matches your experience. We'd love to get in touch!</p>
                        {careers.map((el) => {
                            return <CareerPositionRow title={el.title} location={el.location}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}