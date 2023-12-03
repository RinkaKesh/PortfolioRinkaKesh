import React from 'react';
import style from './ProjectCard.module.css';
import { FaGithub } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io"


const ProjectCard = ({project}) => {
  return (
    <div className={style.container}>

        <img src={project.image}alt={project.title} className={style.image} />
        <h3 className={style.title}>{project.title}</h3>
        <p className={style.description}>{project.description}</p>
        <ul className={style.techContainer}>
            {project.techstack.map((tech,index)=>(
                <li key={index} className={style.tech}>{tech}</li>
            ))}

        </ul>
        <div className={style.linkContainer}>
            <a href={project.live} className={style.link}> <IoIosNavigate className={style.icon}/>Go Live</a>
            <a href={project.source} className={style.link}><FaGithub className={style.icon}/> Source</a>
        </div>
    </div>
  )
}

export default ProjectCard