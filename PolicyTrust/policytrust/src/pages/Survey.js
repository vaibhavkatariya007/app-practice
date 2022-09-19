import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Loader from '../components/Loader';

function Survey() {
    const [displayLoader, setDisplayLoader] = useState(true);
    const hideLoader = () => setDisplayLoader(false);
    return (
        <>
            <Helmet>
                <title>Policy Trust - Survey</title>
            </Helmet>
            {displayLoader ? <Loader /> : null}
            <div className='survey-container'><iframe
                onLoad={hideLoader}
                src="https://docs.google.com/forms/d/e/1FAIpQLSdSl9rtHOGymT63RnLzTCpxBZPCva3quuU8z11wJm8fICu2zQ/viewform?embedded=true"
                width="640" height="1000" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe></div>
        </>)
}

export default Survey
