import React from "react";
import './raju.css';
import Image from '../Components/image/pexels-anjana-c-169994-674010.jpg';
import Image1 from '../Components/image/app-info-generator.bf08e63e.webp';

function Raju() {
    return (
        <div>
            <center>
                <h1>User Details</h1>
                <img src={Image} alt="User" />
                <img src={Image1} alt="User" />
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="name" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                </div>
            </center>
        </div>
    );
}

export default Raju;
