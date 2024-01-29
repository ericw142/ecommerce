import React from 'react';

export const CareerPositionRow = ({ title, location, setDisplayMessage }) => {
    return (
        <div className='row border-top'>
            <div className='col text-start mt-2'>
                <p className='m-0'>{title}</p>
                <p className='m-0'>{location}</p>
            </div>
            <div className='col p-3'>
                <button className='btn btn-outline-secondary' onClick={() => setDisplayMessage(true)}>Apply Now</button>
            </div>
        </div>
    )
}