import React from 'react';
import asabenehImage from '../images/asabeneh.jpg'
import {FaCheckCircle} from "react-icons/fa";

const Profile = () => {
    return ( 
        <div className="header">
            <img src={asabenehImage} alt="" />
            <h3>ASABABENEH YETAYEH  <i><FaCheckCircle/></i> </h3>
            <br />
            <p>Senior Developer, Finland</p>
        </div>
     );
}
 
export default Profile;
