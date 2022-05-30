import React from 'react';

import './static/navbar.css'


const Navbar = () => {
    return ( 
    <>
    <div className="container-navBar">        
        <nav>
            <div className="menu">
            <div className="mobile-menu">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <div className="container-logo">
                <div className="logo"></div>
                <header>ChocoBrownie
                <p>Que não te falte felicidade... e nem brownie</p></header>
            </div>
            <ul className='navlist'>
                <li>Texto Aqui</li>
                <li>Texto Aqui</li>
                <li>Texto Aqui</li>
                <li>Texto Aqui</li>
                <li>Texto Aqui</li>
                <li>Texto Aqui</li>
            </ul>
            </div>
            <div className="browning">
                <div className="icon"><ion-icon name="search-outline"></ion-icon></div>
                <div className="icon"><ion-icon name="person-circle-outline"></ion-icon></div>
                <div className="icon"><ion-icon name="logo-paypal"></ion-icon></div>
            </div>
        </nav>
    </div>
    </>
     );
}
 
export default Navbar;