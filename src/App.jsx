import React from 'react';
import { useOutlet, useLocation } from 'react-router-dom';

import './App.css';

function App() {
    const location = useLocation();
    const currentOutlet = useOutlet();

    return (
        <div className="App">
            <div key={location.pathname} className="route-container">
                {currentOutlet}
            </div>
        </div>
    );
}

export default App;