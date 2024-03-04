import React from 'react';
import GoogleMapReact from 'google-map-react';

export const GoogleMap = ({ lat, lng, marker }) => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={{
                    lat,
                    lng
                }}
                defaultZoom={11}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text={marker}
                />
            </GoogleMapReact>
        </div>
    )
}