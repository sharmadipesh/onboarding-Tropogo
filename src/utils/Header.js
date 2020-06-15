import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-style-container">
                <div className="logo-container">
                    <img alt="tropogo" src="img/logoHeader.png"/>
                </div>  
                <div id="progressbar">
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Header;