import './App.css';
import { useState } from 'react';
import { ContentBody } from './views/ContentBody';

function App() {
    const [selectedView, setSelectedView] = useState('');

    const locations = [
        {
            location: 'Baltimore, MD',
            storehours: 'Monday - Friday 9am to 5pm',
            address: '1234 Eutaw St',
            products: [],
        },
        {
            location: 'Washington, D.C.',
            storehours: 'Tuesday - Friday, 12pm to 7pm',
            address: '987 Main St',
            products: [],
        }
    ];

    return (
        <div className="App">
            <div id="content-header">
                <div className='row'>
                    <div className='col-2'>
                        <button onClick={() => setSelectedView('')}>Home</button>
                    </div>
                    <div className='col-8'>
                        <h1 onClick={() => setSelectedView('')}>ShopSite</h1>
                    </div>
                    <div className='col-2'>
                        {selectedView === 'Storefront' ? (
                            <button onClick={() => setSelectedView('Cart')}>Cart</button>
                        ) : (
                            <button onClick={() => setSelectedView('Storefront')}>Store</button>
                        )}
                    </div>
                </div>
            </div>
            <ContentBody
                selectedView={selectedView}
                setSelectedView={setSelectedView}
                locations={locations}
            />
            <div id="content-footer">
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => setSelectedView('Locations')}>Locations</button>
                    </div>
                    <div className='col'>
                        <button onClick={() => setSelectedView('About')}>About</button>
                    </div>
                    <div className='col'>
                        <button onClick={() => setSelectedView('Careers')}>Careers</button>
                    </div>
                    <div className='col'>
                        <button onClick={() => setSelectedView('Contact')}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
