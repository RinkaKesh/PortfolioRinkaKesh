import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdContactPhone,MdWorkOutline } from "react-icons/md";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title} href="/">
        Rinka Kesh
      </h2>
      <div className={styles.menu}>
        <div>
          {menuOpen ? (
            <FaTimes className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <FaBars className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} />
          )}
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home"><FaHome/>Home</a>
          </li>
          <li>
            <a href="#about"><IoWoman/>About</a>
          </li>
          <li>
            <a href="#skill"><FaLaptopCode/>Skill</a>
          </li>
          <li>
            <a href="#experience"><MdWorkOutline/>Experience</a>
          </li>
          <li>
            <a href="#projects"><LiaProjectDiagramSolid/>Projects</a>
          </li>
          <li>
            <a href="#contact"><MdContactPhone/>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar