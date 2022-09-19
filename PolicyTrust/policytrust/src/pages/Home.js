import React from 'react';

import {
    Link
} from "react-router-dom";

import Slider from "react-slick";

import audience_icon from '../assets/icons/audience.png';
import insight_icon from '../assets/icons/insight.png';
import location_icon from '../assets/icons/location.png';


import l1_icon from '../assets/icons/l1.png';
import l2_icon from '../assets/icons/l2.png';
import l3_icon from '../assets/icons/l3.png';
import l4_icon from '../assets/icons/l4.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ashok from '../assets/images/customers/ASHOK-MITTAL.jpeg';
import Kuldeep from '../assets/images/customers/KULDEEP-BHUTOLA.jpeg';
import Priyanka from '../assets/images/customers/PRIYANKA.jpeg';
import Sandeep from '../assets/images/customers/Sandeep-Malhotra.jpeg';


import HDFC_ERGO from '../assets/images/brands/hdfc_ergo.png';
import ICICI from '../assets/images/brands/icici_lombard.png';
import MANIPAL from '../assets/images/brands/manipal_cigna.png';
import STAR from '../assets/images/brands/star_health.png';
import TATA from '../assets/images/brands/tata_aia.png';


const brands = [
    {
        brandName: "HFFC ERGO",
        brandImg: HDFC_ERGO
    },
    {
        brandName: "ICICI LOMBARD",
        brandImg: ICICI
    },
    {
        brandName: "MANIPAL CIGNA",
        brandImg: MANIPAL
    },
    {
        brandName: "STAR HEALTH",
        brandImg: STAR
    },
    {
        brandName: "TATA AIA",
        brandImg: TATA
    },
]

const customerfeedbacks = [
    {
        customerName: 'Ashok Mittal',
        customerImage: Ashok,
        customerDesignation: 'Businessman',
        customerFeedback: 'I like policyTrust because I get all my financial requirement fulfilled under one roof.'
    },
    {
        customerName: 'Kuldeep Bhutola',
        customerImage: Kuldeep,
        customerDesignation: 'Real Estate Businessman',
        customerFeedback: 'The Services provided by you are extremely helpful at the time, when my wife was admitted in the hospital. Thank you for your timely assistance.'
    },
    {
        customerName: 'Dr. Priyanka Choudhary',
        customerImage: Priyanka,
        customerDesignation: 'MBBS MS',
        customerFeedback: 'I am a doctor by profession and time constrain is the most important factor but I thanks policyTrust to understand my requirement and suggest me best policy and insurance company without wasting time.'
    },
    {
        customerName: 'Sandeep Malhotra',
        customerImage: Sandeep,
        customerDesignation: 'Businessman',
        customerFeedback: 'In starting I was bit worried regarding best health policy for my family, but policyTrust help me to clarify all my droughts and most important policyTrust assist me at the time of my son hospitalization.  Thanks policyTrust Team.'
    },

]

const Settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


function Home() {
    return (
        <>
            <div className="wrap">
                <div className='info'>Participate in survey and get a chance to cover yourself with 10 lakhs of accidental insurance</div>
                <Link className="nav-link button" to="/survey">Take Survey</Link>
            </div>

            <div className="banner">
                <div className='banner-text'>
                    WE PROVIDE <br /> THE BEST HEATHCARE <br /> SERVICES WITH BEST DEALS
            </div>
            </div>


            <div className="bannerbottom">
                <div className='header'>
                    <div className="heading">WELCOME</div>
                    <div className="sub-heading">to PolicyTrust.in</div>
                </div>
                <div className="description">
                    PolicyTrust.in is the leading and trusted group of experienced and dedicated professionals of experience
                    more than 15
                    years helping clients to get the best insurance products. We offer you free and unbiased advice of
                    financial products
                    such as pension plans, child plans, investments, health policies, travel policies, car & bike insurance,
                    all types of
                    loans and much more. We are equipped with the most experienced, dedicated and hardworking professionals
                    in this industry
                    to serve you better.
            </div>
            </div>


            <div className="row grid three-col">
                <div className="col-4">
                    <div className='icon'>
                        <img src={location_icon} alt='icon' />
                    </div>
                    <div className="heading">Establish Goals</div>
                    <div className="description">
                        PolicyTrust understand your requirements with simple questions and advise you the best possible plan
                        as per your
                        requirement.
                </div>
                </div>
                <div className="col-4">
                    <div className='icon'>
                        <img src={audience_icon} alt='icon' />
                    </div>
                    <div className="heading">Work with a Team</div>
                    <div className="description">
                        We’ve worked hard to make your financial objective easy for you. We compare every available
                        financial plan and bring out
                        the best possible plan to save your money as well as time.
                </div>
                </div>
                <div className="col-4">
                    <div className='icon'>
                        <img src={insight_icon} alt='icon' />
                    </div>
                    <div className="heading">Get Results</div>
                    <div className="description">
                        PolicyTrust professional support team has years of experience with great results. Our experts are
                        always there when you
                        need.
                </div>
                </div>
            </div>


            <div className='custom-imp-msg'>
                <div className='heading'>WHY POLICYTRUST?</div>
                <div className='sub-heading'>Always there when you need most</div>
            </div>


            <div className="row grid four-col">
                <div className="col-3">
                    <div className='icon'>
                        <img src={l1_icon} />
                    </div>
                    <div className="description">
                        More than 100+ Plans
                </div>
                </div>
                <div className="col-3">
                    <div className='icon'>
                        <img src={l2_icon} />
                    </div>
                    <div className="description">
                        Instant Policy delivery to your inbox
                </div>
                </div>
                <div className="col-3">
                    <div className='icon'>
                        <img src={l3_icon} />
                    </div>
                    <div className="description">
                        Post Sales service and claim assistance
                </div>
                </div>
                <div className="col-3">
                    <div className='icon'>
                        <img src={l4_icon} />
                    </div>
                    <div className="description">
                        Expert advice with best possible plan
                </div>
                </div>
            </div>

            <div className='customer-feedback-container'>
                <h2>Our Client Says</h2>
                <Slider {...Settings}>
                    {customerfeedbacks.map(customer => {
                        return (
                            <div>
                                <div className='customer-view'>
                                    <div className='customer-img'>
                                        <img src={customer.customerImage} alt={customer.customerName} />
                                    </div>
                                    <div className='customer-feedback'>
                                        <div className='description'>{customer.customerFeedback}</div>
                                        <div className='name'>{customer.customerName}</div>
                                        <div className='occupation'>{customer.customerDesignation}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>

                <div className='feedback-border'></div>
            </div>

            <div className='brands-container'>
                <Slider {...Settings} slidesToShow={4}>
                    {
                        brands.map(brand => <div>
                            <div className="brand-box" style={{ backgroundImage: `url(${brand.brandImg})` }} />
                        </div>)
                    }

                </Slider>
            </div>
        </>
    )
}

export default Home
