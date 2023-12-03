import React from 'react';
import style from './Skill.module.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Skill = () => {

  const skillList=[
    { id:1,
      title:"HTML",
      logo:FaHtml5,
      color:"e34c26"
    },
    {
      id:2,
      title:"CSS",
      logo:IoLogoCss3,
      color:"blue"
    },
    {
      id:3,
      title:"JavaScript",
      logo:IoLogoJavascript,
      color:"F0DB4F"
    },
    {
      id:4,
      title:"Node.js",
      logo:FaNodeJs,
      color:"3c873A"

    },
    {
      id:5,
      title:"React Js",
      logo:FaReact,
      color:"61DBFB"


    },
    {
      id:6,
      title:"GitHub",
      logo:FaGithub,
      color:"black"

    }
  ]
  return (
    <div id='skill' className={style.skillContainer}>
       <h1 className={style.htag}>My Skills...</h1>
      <div className={style.skillCard}>
        {skillList.map((skill)=>(
          <div key={skill.id} className={style.card}>
            {/* <img src={skill.logo} alt={skill.title} className={style.logo}/> */}
            {/* <skill.logo className={style.logo} style={{color:{skill.color}}}/> */}
            {React.createElement(skill.logo,{color:skill.color,size:90,style:{marginTop:"15px"}})}
            <h2 className={style.skillname}>{skill.title}</h2>

             
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skill