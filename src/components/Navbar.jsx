import React from 'react';
import {Link} from 'react-scroll'
import style from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdContactPhone } from "react-icons/md";
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
    <div >
        <nav className={style.navbar}>
        
            <h3 className={style.intro}>It's Rinka Kesh</h3>
        
            
            <ul>
                <li>
                    <Link to='home' smooth={true} duration={500} offset={-100} ><FaHome className={style.icon}/>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} offset={-100}><IoWoman className={style.icon}/>About</Link>
                </li>
                <li>
                    <Link to='skill' smooth={true} duration={500} offset={-110}><FaLaptopCode className={style.icon}/>Skills</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} offset={-90}><LiaProjectDiagramSolid className={style.icon}/>Projects</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} offset={0}><MdContactPhone className={style.icon}/>Contact</Link>
                </li>

            </ul>
            

        </nav>
    </div>
  )
}

export default Navbar