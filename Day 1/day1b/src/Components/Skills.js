import React from 'react';
import {FaClock} from "react-icons/fa";


const Skills = () => {

    const skills = ["HTML","CSS","SASS","JS","React","Redux","Node","MongoDB","Python","Flask","Django",
                    "Numpy","Pandas","Data Analysis","MySQL","GraphQL","D3.js","Gatsby","Docker","Heroku",
                    "Git"];
    return (  
        <div className="skills">
             <h3>
            SKILLS
            </h3>
            <br />
            <div className="skill-list">
                {skills.map((skill)=>
                {
                    return <button className="blue-box">{skill}</button>
                })}
            </div>
            <br/>
            <p><i><FaClock/> </i>Joined on Aug 30, 2020</p>
        </div>
       
    );
}
 
export default Skills;