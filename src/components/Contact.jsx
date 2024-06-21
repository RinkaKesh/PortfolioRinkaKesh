import React, { useState } from 'react';
import style from './Contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  const [isEnter, setIsEnter] = useState(false);

  const handleEnter = () => {
    setIsEnter(true);
  };

  const handleLeave = () => {
    setIsEnter(false);
  };

  return (
    <div id='contact' className={style.container}>
      <div className={style.title}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={style.linkContainer}>
        <li>
          <a
            href="mailto:keshrinka2013@gmail.com"
            className={style.link}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <MdOutlineMail className={style.icon} />
            {isEnter ? "keshrinka2013@gmail.com" : "E-mail"}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rinka-kesh" className={style.link}>
            <FaLinkedin className={style.icon} />
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/RinkaKesh" className={style.link}>
            <FaGithub className={style.icon} />
            GitHub
          </a>
        </li>
        <li>
          <a href="tel:09093648754" className={style.link}>
            <IoMdCall className={style.icon} />
            Tel: 09093648754
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
