import React, { useState } from 'react';
import ProjectCard from './projectCard';
import style from './Projects.module.css'

// import projectList from '/../data/projectList.json'


const Projects = () => {

  

  const projectList=[
    { 
         id :1,
         title :"Dealmart",
         image :"dealmart.png",
         description:"Dealmart: An E-commerce clone with MongoDB, Express for secure login and registration, plus Context API for seamless cart and wishlist management.",
         source:"https://github.com/RinkaKesh/Dealmart",
         live:"https://dealmart-rinkakesh.vercel.app/",
         techstack:["VScode","React.js","Vite","CSS","NPM","Vercel","Git"]
    },
    {
         id :2,
         title :"Weather App",
         image :"weatherMap.PNG",
         description:"Weather Map: A city-based weather application that retrieves real-time weather information of the entered city.",
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