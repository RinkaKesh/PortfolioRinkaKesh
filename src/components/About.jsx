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
        <div className={styles.headingContainer}>
          <p className={styles.heading}>About Me ...</p>
          <FaPen className={styles.penIcon} />
        </div>
        <p className={styles.paragraph}>
          Hi, I'm <strong>Rinka Kesh</strong>, a <span>Full-Stack Web Developer</span> with hands-on experience in <span>building and deploying production-level applications</span>. My expertise lies in the <span>MERN</span> stack (MongoDB, Express.js, React.js, Node.js) along with <span>Tailwind CSS and Chakra UI</span> for sleek UI designs.
        </p>
        <p className={styles.paragraph}>
          I contributed significantly to <a href="https://feedback.plgos.com" target="_blank" rel="noopener noreferrer">feedback.plgos.com</a><span> a live production application </span>that allows users to submit feedback, visualize data in interactive <span>charts and graphs</span>, and receive real-time alerts.
        </p>
        <p className={styles.paragraph}>
          <span>Key Contributions at feedback.plgos.com:</span>
          <ul>
            <li>Developed and optimized UI components using <span>React.js & Tailwind CSS</span></li>
            <li>Implemented <span>dynamic API fetching</span> for real-time feedback processing</li>
            <li>Integrated <span>charting libraries</span> (e.g., Chart.js, ECharts) for visualizing user feedback data</li>
            <li>Handled <span>alert system integration</span> for instant feedback notifications</li>
            <li>Ensured smooth <span>frontend-backend communication</span> with RESTful APIs</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          I am passionate about building <span>scalable, user-centric applications</span> and constantly exploring new technologies to enhance user experience. Open to collaborations and exciting opportunities in web development!
        </p>
      </div>
    </div>
  );
}



export default About;
