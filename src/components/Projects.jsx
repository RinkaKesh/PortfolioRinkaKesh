import React, { useState } from 'react';
import ProjectCard from './projectCard';
import style from './Projects.module.css'

// import projectList from '/../data/projectList.json'


const Projects = () => {

  

  const projectList=[
    { 
      id :1,
      title :"Take Note",
      image :"takenote.jpg",
      description:"Take Note: A full-stack note-taking application with JWT authentication, full CRUD operations, and a responsive UI built with React and Tailwind CSS.",
      source:"https://github.com/RinkaKesh/ARK_NOTE",
      live:"https://takenote-livid.vercel.app/",
      techstack:["VScode","React.js","Vite","Tailwind CSS","Node.js","MongoDB","Express.js","NPM","Vercel","Git"]
 },
    { 
         id :2,
         title :"Dealmart",
         image :"dealmart.png",
         description:"Dealmart: An E-commerce clone with MongoDB, Express for secure login and registration, plus Context API for seamless cart and wishlist management.",
         source:"https://github.com/RinkaKesh/Dealmart",
         live:"https://dealmart-rinkakesh.vercel.app/",
         techstack:["VScode","React.js","Vite","CSS","NPM","Git","Node.js","MongoDB","Express.js","Vercel"]
    },
    {
         id :3,
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