// import React from 'react';
// import style from './Home.module.css';
// import { useTypewriter } from 'react-simple-typewriter';
// import { MdWavingHand, MdDownload } from "react-icons/md";

// const Home=()=>{
//   const [typeEffect] = useTypewriter({
//     words: ["React Frontend Developer", "MERN Developer", "Tech Enthusiast"],
//     loop: true,
//     typeSpeed: 70,
//     deleteSpeed: 30,
//   });

//   const handleResumeClick = () => {
//     const resumeFileUrl = 'https://drive.google.com/file/d/1OPL0zIQa3tj_8To-gTL99I4XjrFpeeV9/view?usp=sharing';
//     const link = document.createElement('a');
//     link.href = resumeFileUrl;
//     link.download = 'Rinka_Kesh_Resume.pdf';
//     link.click();
//     window.open('https://drive.google.com/file/d/1OPL0zIQa3tj_8To-gTL99I4XjrFpeeV9/view?usp=sharing/view?usp=sharing', '_blank');
//   };

//   return (
//     <div id='home' className={style.home}>
//       <div className={style.left}>
//         <h2>Hello <MdWavingHand className={style.icon} />, I'm</h2>
//         <h1 className={style.name}>Rinka Kesh</h1>
//         <h2 className={style.typerContainer}>I'm a
//           <span className={style.typeEffect}>{typeEffect}</span>
//         </h2>
//         <button className={style.resumeButton} onClick={handleResumeClick}>
//           Resume <MdDownload className={style.downloadIcon} />
//         </button>
//       </div>
//       <div className={style.right}>
//       <img src="Rinka_img.jpg" alt="Rinka's Image" className={style.image} />
//       </div>
//     </div>
//   );
// }
// export default Home

import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import { MdWavingHand, MdDownload } from "react-icons/md";

// Typewriter Effect
const TypewriterEffect = ({ words, typeSpeed = 70, deleteSpeed = 30, pauseTime = 1500 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? deleteSpeed : isPaused ? pauseTime : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, isPaused, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
};



// Download Icon
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const Home = () => {
  const handleResumeClick = () => {
    const resumeUrl = "https://drive.google.com/file/d/1OPL0zIQa3tj_8To-gTL99I4XjrFpeeV9/view?usp=sharing";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Initiate download
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Rinka_Kesh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error("Download failed:", err));
  };

  return (
    <div className=" flex items-center justify-center" style={{ paddingTop: "150px" }}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left container */}
          <div className=" flex flex-col items-center lg:items-center space-y-4 w-full lg:w-1/2 max-w-xl">
            <h2 className="text-2xl flex items-center gap-2">
              Hello <MdWavingHand className={style.icon} /> I'm
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-600 font-sans">
              Rinka Kesh
            </h1>
            <div className="h-20 flex items-center">
              <h2 className="text-xl md:text-2xl flex items-center gap-2">
                I'm a{" "}
                <span className="text-blue-600 font-bold">
                  <TypewriterEffect
                    words={["React Frontend Developer", "MERN Developer", "Tech Enthusiast"]}
                  />
                </span>
              </h2>
            </div>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="bg-slate-800 hover:bg-teal-600 text-white rounded-lg font-bold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group"
              style={{ padding: "6px 16px" }}
            >
              Resume
              <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Right container */}
          <div className="w-full lg:w-1/2 flex justify-center max-w-xl">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <img src="Rinka_img.jpg" alt="Rinka's Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
