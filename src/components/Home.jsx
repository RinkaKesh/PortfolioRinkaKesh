import React from 'react';
import style from './Home.module.css';
import { useTypewriter } from 'react-simple-typewriter';
import { MdWavingHand, MdDownload } from "react-icons/md";

const Home=()=>{
  const [typeEffect] = useTypewriter({
    words: ["React Frontend Developer", "MERN Developer", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 30,
  });

  const handleResumeClick = () => {
    const resumeFileUrl = 'https://drive.google.com/uc?export=download&id=1AE254D7q0pqMFLN7jSolHyvXtymc4rH7';
    const link = document.createElement('a');
    link.href = resumeFileUrl;
    link.download = 'Rinka_Kesh_Resume.pdf';
    link.click();
    window.open('https://drive.google.com/file/d/1AE254D7q0pqMFLN7jSolHyvXtymc4rH7/view?usp=sharing', '_blank');
  };

  return (
    <div id='home' className={style.home}>
      <div className={style.left}>
        <h2>Hello <MdWavingHand className={style.icon} />, I'm</h2>
        <h1 className={style.name}>Rinka Kesh</h1>
        <h2 className={style.typerContainer}>I'm a
          <span className={style.typeEffect}>{typeEffect}</span>
        </h2>
        <button className={style.resumeButton} onClick={handleResumeClick}>
          Resume <MdDownload className={style.downloadIcon} />
        </button>
      </div>
      <div>
      <img src="Rinka_img.jpg" alt="Rinka's Image" className={style.image} />
      </div>
    </div>
  );
}
export default Home