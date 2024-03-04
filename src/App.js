import './App.css';
import { useState } from 'react';
import { ContentBody } from './views/ContentBody';
import locationData from './locationData';
import { TopNavbar } from './components/TopNavbar';

function App() {
    const [selectedView, setSelectedView] = useState('');
    const [cart, setCart] = useState({ products: [] });

    return (
        <div className="App">
            <TopNavbar selectedView={selectedView} setSelectedView={setSelectedView} cart={cart}/>
            <ContentBody
                selectedView={selectedView}
                setSelectedView={setSelectedView}
                locations={locationData}
                cart={cart}
                setCart={setCart}
            />
        </div>
    );
}

export default App;
