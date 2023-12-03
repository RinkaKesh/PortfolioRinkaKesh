import React from 'react';
import { FaPen } from "react-icons/fa";
import style from './About.module.css'

const About = () => {
 
  return (
    <div id='about' className={style.container}>
      <h2 className={style.title}>About Me </h2>
      <span className={style.icon}><FaPen/></span>
      <h3 className={style.heading}>Frontend Developer</h3>
      <p className={style.text}>Proficient in <span style={{color:"darkorange",fontWeight:"bold"}}>HTML</span> ,<span style={{color:"blue",fontWeight:"bold"}}>CSS</span> ,<span style={{color:"yellow",fontWeight:"bold"}}>JavaScript</span> ,<span style={{color:"Green",fontWeight:"bold"}}>Node.js</span> ,<br /> 
      <span style={{color:"skyblue",fontWeight:"bold"}}>React.js</span> ,<span style={{color:"black",fontWeight:"bold"}}>Git</span>. 
      Passionate about creating seamless Web experience and eager to expand skills in innovative Web Development projects Open to exciting opportunities and collaborations.</p>
    </div>
  )
}

export default About