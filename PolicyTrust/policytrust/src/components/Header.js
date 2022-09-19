import React from 'react';

import phone_icon from '../assets/icons/phone_icon.png';
import letter_icon from '../assets/icons/letter.png';

function Header() {
    return (
        <div className="row top-header">
            <div className="col">
                <div className="row">
                    <div className="col-md-auto">
                        <span className='icon'><img src={phone_icon} alt='phone' /></span>
                        <span className='text'>+91-9557349103</span>
                    </div>
                    <div className="col-md-auto">
                        <span className='icon'><img src={letter_icon} alt='mail' /></span>
                        <span className='text'><a href='mailto:financialaffinity@gmail.com'>FINANCIALAFFINITY@GMAIL.COM</a></span>
                    </div>
                </div>
            </div>
            <div className="col-md-auto">
                PROTECT YOUR FAMILY WITH INSURANCE
            </div>
        </div>
    )
}

export default Header
