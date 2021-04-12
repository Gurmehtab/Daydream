import './Daydream.css';

import { Link } from 'react-router-dom';
import React from 'react';

function Daydream() {
    return (
        <div>

            {/* <div className="featured-video-container">
                <div className="featured-video" />
            </div>
                
            <br />
            <br />

            https://www.daydreamthemag.com/
            <br />

            <div className="bottom"> */}
                {/* <h2 className="heading">Read Daydream Magazine</h2> */}
                <Link className="heading" to="https://www.daydreamthemag.com/">Read Daydream Magazine</Link>
                {/* <div className="featured-items-container">
                    <div className="featured-items" />                   
                    <div className="featured-items" />                   
                    <div className="featured-items" />                 
                </div>
            </div>
  
            <br />
            <br />
                
            <div className="featured-items-container">
                <div className="featured-items" />                   
                <div className="featured-items" />                   
                <div className="featured-items" />                   
            </div>

            <br />
            <br />
            <br />
                   */}
        </div>
    );
}

export default Daydream;