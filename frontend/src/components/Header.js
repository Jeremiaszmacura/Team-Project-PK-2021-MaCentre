import React from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {



    return (
        <div className="header">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <SearchBar/>
            <div className="icons">
                <img src="/images/basket.png" alt="basket icon"/>
                <img src="/images/account.png" alt="account icon"/>
            </div>
        </div>
    );
}

export default Header;