import React from 'react';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import "../sign/Sign.css";
import {Link} from "react-router-dom";

function Sign() {
    return (
        <div className="sign">
        <div className="sign__first">
            <img src="./images/sign.png" alt="sign" />
            <div className="sign__icon">
                <CardMembershipIcon/>
            </div>
        </div>
        <div className="sign__second">
            <h2>Want to join </h2>
            <h1>Membership </h1>
            <Link to="">Join Now</Link>
        </div>
            
        </div>
    )
}

export default Sign;
