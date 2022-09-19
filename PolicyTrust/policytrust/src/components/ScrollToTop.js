import React, { useState } from 'react';


const ScrollToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <span className="scrollTop" onClick={scrollTop} style={{ height: 50, display: showScroll ? 'block' : 'none' }} >&#8593;</span>
    );
}

export default ScrollToTop;