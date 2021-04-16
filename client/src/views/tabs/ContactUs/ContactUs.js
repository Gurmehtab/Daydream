import './ContactUs.css';

import ContactIcons from '../../../components/ContactIcons.js';
import React from 'react';
import { Button } from '../../../components/Button';

//import { Link } from 'react-router-dom';



function ContactUs() {
    return (
        <div className="App">
            <header className="App-header-CU">
                <h2>
                    Contact Us
                </h2>
            </header>
            <body className = "App-info-CU">
                <h2>Interested in joining DayDream Magazine?</h2>

                <p> Our applications are now closed(2/13/21)</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ2fHlZU5TRWX6jfO_QwTyAp8tmfFr30vv-UjGAFRBfDXj2A/closedform">
                    <Button buttonSize= ".btn--medium" buttonStyle= ".btn--primary--solid">
                        Editors-in-Chief Applications
                    </Button>
                </a>
                <p class ="buffer"></p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9uXMEE7mShdSQytD7ss1veqJfIbZd1pWtQ35UYn_04mQ4Ng/closedform">
                    <Button buttonSize= ".btn--medium" buttonStyle= ".btn--primary--solid">
                        Creative Production Team Applications
                    </Button>
                </a>
                <p class ="buffer"></p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfu7m9sPoOZ1EgsdeSqAKvxdtZ_pCf27eljUPbAmAYXIzBvzA/closedform">
                    <Button buttonSize= ".btn--medium" buttonStyle= ".btn--primary--solid">
                        Production Logistics Team Applications
                    </Button>
                </a>
                <p class ="buffer"></p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLScCM2lvVaUaKS9A1P_gihpHnaf1qNrvCOx0KQQTEriVoYxsSw/viewform">
                    <Button buttonSize= ".btn--medium" buttonStyle= ".btn--primary--solid">
                        Community and Financial Relations Team Applications
                    </Button>
                </a>
                <p class ="buffer"></p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaN8MsDWBqTg2IUnNZ0Bieq7eGwdBXk2Gk1dn1RboIWeEsNQ/closedform">
                    <Button buttonSize= ".btn--medium" buttonStyle= ".btn--primary--outlined">
                        Web and Social Media Production Team Applications
                    </Button>
                </a>

                <p class ="bottom-two"></p>
                <h2>
                    Follow us for more content:
                </h2>
                <p>We would love to hear from you! Please reach out to us at any time and a member of our team will be in contact soon.</p>
            </body>
           
            <font size="8">    
            <ContactIcons ></ContactIcons>
            </font>
        </div> 
        
    
    );
}

export default ContactUs;