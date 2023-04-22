import React from 'react';
import {IoLogoLinkedin} from "react-icons/io"
import { IoLogoInstagram } from 'react-icons/io';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='text'>
            <h3>The project was done by Kamyar Kamalikamazani as a sample of his work, using React and Redux to build it.</h3>
            </div>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/kamyar-kamali-671a5822b/'>
                <IoLogoLinkedin/>
                </a>
                <a href='https://www.instagram.com/kamyar_kamali021/'>
                <IoLogoInstagram/>
                </a>
            </div>
        </div>
    );
};

export default Footer;