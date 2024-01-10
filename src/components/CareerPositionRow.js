import React from 'react';

export const CareerPositionRow = ({ title, location }) => {
    return (
        <div className='row'>
            <div className='col'>
                <p>{title}</p>
                <p>{location}</p>
            </div>
            <div className='col'>
                <button>Apply Now</button>
            </div>
        </div>
    )
}