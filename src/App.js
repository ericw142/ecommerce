import './App.css';
import { useState } from 'react';
import { ContentBody } from './views/ContentBody';
import locationData from './locationData';
import { TopNavbar } from './components/TopNavbar';

function App() {
    const [selectedView, setSelectedView] = useState('');
    const [cart, setCart] = useState({ products: [] });

    return (
        <div className={
            selectedView === 'Locations' ? "App animated-bg" : 
            selectedView === 'About' ? 'App animated-bg' :
            selectedView === 'Careers' ? 'App animated-bg' :
            selectedView === 'Contact' ? 'App animated-bg' 
            : "App"
        }>
            <TopNavbar selectedView={selectedView} setSelectedView={setSelectedView} cart={cart}/>
            <ContentBody
                selectedView={selectedView}
                setSelectedView={setSelectedView}
                locations={locationData}
                cart={cart}
                setCart={setCart}
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
