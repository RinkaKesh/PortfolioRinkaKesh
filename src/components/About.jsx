import React from 'react';
import { FaPen } from "react-icons/fa";
import style from './About.module.css'

const About = () => {

  return (
    <div id='about' className={style.container}>
      <h2 className={style.title}>About Me ...<FaPen className={style.icon}/></h2>
      {/* <span className={style.icon}><FaPen /></span> */}
      <ul>
        <li>Frontend Development
        <p className={style.paragraph}>
          Proficient in HTML, CSS, JavaScript, and React.js.
          Passionate about creating intuitive and responsive user interfaces to enhance user experience.
        </p>
        </li>

        <li>Backend Development
        <p className={style.paragraph}>
          Experienced with MongoDB and Express.js for building scalable backend systems and APIs.
          Familiar with handling databases and implementing backend logic to support frontend applications.
        </p>
        </li>

        <li>Data Structures & Algorithms (DSA)
        <p className={style.paragraph}>
          Strong understanding of fundamental data structures such as arrays, linked lists, trees, and graphs.
          Proficient in algorithm design and optimization techniques, including two-pointer and sliding window algorithms.
        </p>
        </li>
      </ul>
    </div>
  )
}

export default About