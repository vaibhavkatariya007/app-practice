import React from 'react';

import fb_icon from '../assets/icons/fb.png';
import gl_icon from '../assets/icons/gl.png';
import tw_icon from '../assets/icons/tw.png';

const d = new Date();
const currentYear = d.getFullYear();
function Footer() {
    return (
        <div className='footer'>
            <div className='social-media'>
                <div className='head'>
                    Follow us
                </div>
                <div className='social-icons'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/financialaffinity/' target='_blank'>
                                <img src={fb_icon} alt='facebook' />
                            </a>

                        </li>
                        <li>
                            <img src={gl_icon} alt='google' />
                        </li>
                        <li>
                            <img src={tw_icon} alt='twitter' />
                        </li>
                    </ul>

                </div>
            </div>
            <div className='copyright'>
                <div className='heading'> &copy; Copyright 2019-{currentYear}</div>
                <div className='description'>All Rights Reserved</div>
                <div className='powered-by'>Powered By: Affinity Financial Associates</div>
            </div>
        </div>

    )
}

export default Footer
