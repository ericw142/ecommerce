import './App.css';
import { useState } from 'react';
import { ContentBody } from './views/ContentBody';
import { FaShop } from "react-icons/fa6";
import { HiMiniHome, HiMiniShoppingCart } from "react-icons/hi2";
import locationData from './locationData';

function App() {
    const [selectedView, setSelectedView] = useState('');

    return (
        <div className="App">
            <div id="content-header">
                <div className='row'>
                    <div className='col-2'>
                        <button className='button-site-header mx-auto' onClick={() => setSelectedView('')}>
                            <div><HiMiniHome /></div>
                            <p>Home</p>
                        </button>
                    </div>
                    <div className='col-8'>
                        <h1 className='site-title' onClick={() => setSelectedView('')}>Soap Store</h1>
                    </div>
                    <div className='col-2'>
                        {selectedView === 'Storefront' ? (
                            <button className='button-site-header mx-auto' onClick={() => setSelectedView('Cart')}>
                                <div><HiMiniShoppingCart /></div>
                                <p>Cart</p>
                            </button>
                        ) : (
                            <button className='button-site-header mx-auto' onClick={() => setSelectedView('Storefront')}>
                                <div><FaShop /></div>
                                <p>Store</p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <ContentBody
                selectedView={selectedView}
                setSelectedView={setSelectedView}
                locations={locationData}
            />
            <div id="content-footer">
                <div className='row'>
                    <div className='col'>
                        <button className="button-no-style mt-2" onClick={() => setSelectedView('Locations')}>Locations</button>
                    </div>
                    <div className='col'>
                        <button className="button-no-style mt-2" onClick={() => setSelectedView('About')}>About</button>
                    </div>
                    <div className='col'>
                        <button className="button-no-style mt-2" onClick={() => setSelectedView('Careers')}>Careers</button>
                    </div>
                    <div className='col'>
                        <button className="button-no-style mt-2" onClick={() => setSelectedView('Contact')}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
