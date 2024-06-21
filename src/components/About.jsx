import React from 'react';
import { FaPen } from "react-icons/fa";
import styles from './About.module.css';
import aboutImage from '../../public/image/about4.jpg';

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="About" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>About Me ... <FaPen className={styles.penIcon}/></h1>
        <p className={styles.paragraph}>
          Hi, I'm <strong>Rinka Kesh</strong>, a dynamic full-stack web developer who is continuously learning and refining my skills. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I'm also adept at frontend technologies such as HTML, CSS, and related frameworks. Additionally, I have proficiency in Python.
        </p>
        <p className={styles.paragraph}>
          My experience lies in designing and developing scalable web applications with seamless integration between frontend and backend components. I possess strong problem-solving abilities, pay close attention to detail, and approach tasks with a proactive attitude, all of which contribute to delivering high-quality, innovative solutions.
        </p>
        <p className={styles.paragraph}>
        I am enthusiastic about collaborating with diverse teams to learn and contribute effectively. I'm eager to enhance my skills and work collaboratively to deliver high-quality results.
        </p>
      </div>
    </div>
  );
}

export default About;
