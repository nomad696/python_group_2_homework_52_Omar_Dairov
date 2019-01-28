import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>BOOOOOOOK.COM</h1>
                <div className="nav">
                    <h3><a href="#">Календарь</a></h3>
                    <h3><a href="#">Страны</a></h3>
                    <h3><a href="#">Цены</a></h3>
                    <h3><a href="#">Контакты для бронирования</a></h3>
                </div>
            </div>
        );
    }

}

export default Header;
