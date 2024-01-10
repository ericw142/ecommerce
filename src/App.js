import './App.css';

function App() {
    return (
        <div className="App">
            <div id="content-header">
                <div className='row'>
                    <div className='col-2'>
                        <button>Home</button>
                    </div>
                    <div className='col-8'>
                        <h1>Fake Amazon</h1>
                    </div>
                    <div className='col-2'>
                        <button>Store</button>
                    </div>
                </div>
            </div>
            <div id="content-body">
                <div className='row'></div>
            </div>
            <div id="content-footer">
                <div className='row'>
                    <div className='col'>
                        <button>Locations</button>
                    </div>
                    <div className='col'>
                        <button>About</button>
                    </div>
                    <div className='col'>
                        <button>Careers</button>
                    </div>
                    <div className='col'>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
