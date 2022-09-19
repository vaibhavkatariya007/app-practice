import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

const menuItems = [{ path: '/', name: 'home' }, { path: '/vision', name: 'vision' }, { path: '/about', name: 'about' }, { path: '/contact', name: 'contact' }];

function Menu() {
    const location = useLocation();

    return (
        <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><span className='logo'>
                    <span className='first-half'>POLICY</span>
                    <span className='second-half'>TRUST</span>
                </span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: 100 }}>
                        {menuItems.map((item, IDX) => {
                            return (<li className="nav-item" key={IDX}>
                                <Link className={`nav-link ${item.path === location.pathname ? 'active' : ''}`} to={item.path}>{item.name}</Link>
                            </li>);
                        })
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Menu
