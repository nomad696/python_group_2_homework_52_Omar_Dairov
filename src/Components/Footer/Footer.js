import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
			<div className="footer">
                <div className="container">
                    <div className="details">
                        <div className="sign">
                            <h1>Пишите на е-майл</h1>
                            <a href="#">EMAIL SIGNUP</a>
                        </div>
                        <div className="services">
                            <h1>Время работы: c 9-00 до 17-30</h1>
                            <p>Воскресенье с 9-30 до 11-30</p>
                        </div>
                        <div className="copy">
                            <h6>Есть лицензия, не аферисты!!!</h6>
                        </div>
                    </div>
                </div>
            </div>

		);
    }

}
export default Footer;
