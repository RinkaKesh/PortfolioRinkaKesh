import React from 'react';
import style from './Footer.module.css';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={style.footer_container}>
            
            <div className={style.footer_links}>
                <a href="https://www.linkedin.com/in/rinka-kesh" className={style.footer_link}>
                    <FaLinkedin className={style.footer_icon} />
                   
                </a>
                <a href="https://github.com/RinkaKesh" className={style.footer_link}>
                    <FaGithub className={style.footer_icon} />
                   
                </a>
            </div>

            <a href="mailto:keshrinka2013@gmail.com" className={style.footer_email}>
                <MdOutlineMail className={style.footer_icon} />
                E-mail
            </a>
        </div>
    );
};

export default Footer;
