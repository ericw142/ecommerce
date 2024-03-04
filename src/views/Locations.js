import React from 'react';
import { LocationCard } from '../components/LocationCard';
import GoogleMapReact from 'google-map-react';

export const Locations = ({ locations, setSelectedView, setSelectedStorefront }) => {
    const MapLabel = ({ text }) => (
        <div style={{
          color: 'white', 
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
    );

    return (
        <div className='content-body container' style={{marginTop: '100px'}}>
            <h3 className='body-main-header'>locations</h3>
            <p>While our stores are located in the DC Baltimore area, we offer online shopping and prompt delivery, bringing our products to doorsteps across the country. Explore our selection in person or online!</p>
            <div className='row locations-row'>
                {locations.map((el) => {
                    return <LocationCard location={el.location} storehours={el.storehours} address={el.address} setSelectedView={setSelectedView} setSelectedStorefront={setSelectedStorefront}/>
                })}
            </div>
            <div className='row'>
                <div className='col' style={{ height: '100vh', width: '100%' }}>
                    map of baltimore
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_APIKEY }}
                        defaultCenter={{
                            lat: 10.99835602,
                            lng: 77.01502627
                          }}
                        defaultZoom={11}
                    >
                        <MapLabel
                            lat={59.955413}
                            lng={30.337844}
                            text={'Kreyser Avrora'}
                        />
                    </GoogleMapReact>
                </div>
                <div className='col'>
                    map of dc
                </div>
            </div>
        </div>
    )
}