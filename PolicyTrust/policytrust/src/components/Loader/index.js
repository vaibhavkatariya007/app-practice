import React from 'react';
import './style.css';

function Loader() {
    return (
        <div className='loader'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className='loading-text'>Loading...</div>
        </div>
    )
}

export default Loader;
