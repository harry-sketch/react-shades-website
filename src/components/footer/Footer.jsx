import React from 'react';
import "../footer/Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer__first">
                <p> | All rights reserved |</p>
            </div>
            <div className="footer__second">
                <p>&copy; Copyright {year} || Made by <span>Aloof Programmer</span></p>
            </div>
            <div className="footer__thrid">
                <FacebookIcon/>
                <LinkedInIcon/>
                <InstagramIcon/>
            </div>
        </footer>
    )
}

export default Footer
