import React, { useState } from 'react';
import ProjectCard from './projectCard';
import style from './Projects.module.css'

// import projectList from '/../data/projectList.json'


const Projects = () => {

  

  const projectList=[
    { 
         id :1,
         title :"Fiverr Clone",
         image :"fiverrProject.PNG",
         description:"A website similar to Fiverr.com that provides a freelancing marketplace for individuals to offer services and clients to discover and hire them..",
         source:"https://github.com/masai-course/rinka_kesh_cap05_289/tree/master/tech/FiverrProject",
         live:"https://fiverr-clone-tau-nine.vercel.app/",
         techstack:["VScode","React.js","Vite","CSS","NPM","Vercel","Git"]
    },
    {
         id :2,
         title :"Weather App",
         image :"weatherMap.PNG",
         description:"Weather Map is a city-based weather application that retrieves real-time weather information of the entered city.",
         source:"https://github.com/RinkaKesh/WeatherMap",
         live:"https://weather-map-4537.vercel.app/",
         techstack:["NPM","React.js","Vite","Chakra UI","Vercel","Git"]
    }
]

 
  return (
    <section className={style.container} id='projects'>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {projectList.map((project)=>(
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>

    </section>
    
  );
}

export default Projects