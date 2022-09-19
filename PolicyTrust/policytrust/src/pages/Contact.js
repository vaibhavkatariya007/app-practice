import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Loader from '../components/Loader';

import marker_icon from '../assets/icons/marker.png';
import phone_icon from '../assets/icons/phone_icon.png';
import letter_icon from '../assets/icons/letter.png';


function Contact() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const hideLoader = () => setDisplayLoader(false);

    return (
        <>
            <Helmet>
                <title>Policy Trust - Contact</title>
            </Helmet>
            {displayLoader ? <Loader /> : null}
            <div className='contact-container'>
                <div className='address-block'>
                    <ul>
                        <li>
                            <img src={marker_icon} alt='location' />
                        52, Tyagi Market Prem Nagar Dehradun
                    </li>
                        <li>
                            <img src={phone_icon} alt='phone' />
                        +91-9557349103
                    </li>
                        <li>
                            <img src={letter_icon} alt='mail' />
                            <a href="mailto:financialaffinity@gmail.com">financialaffinity@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <iframe onLoad={hideLoader} src="https://docs.google.com/forms/d/e/1FAIpQLSfNo5KsE13O9n001w5uFf55O9rp2U7AWkLw0_uquKmqWGMGTA/viewform?embedded=true" width="640" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>

        </>
    )
}

export default Contact
