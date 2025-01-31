import React from 'react';
import style from './Experience.module.css';
import { IoIosNavigate } from "react-icons/io"
const Experience = () => {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1rem'
    };


    const experienceListStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    };

    const experienceList = [
        {
            id: 1,
            title: "Full-Stack Developer Intern",
            company: "Questlab.ai (now Questera)",
            tenure: "July 2024 - January 2025",
            description: [
                "Created a dynamic feedback platform enabling users to generate customizable feedback components within 30 seconds",
                "Integrated Monaco Code Editor for seamless code copying and project feedback integration",
                "Developed flexible UI with custom CSS color options for instant component personalization",
                "Engineered scalable frontend solution supporting rapid user feedback collection and visualization"
            ],
            techstack: [
                "React.js",
                "Tailwind CSS",
                "Monaco Editor",
                "Dynamic UI Components",
                "Custom Styling"
            ],
            links: {
                live: "https://feedback.plgos.com"
            }
        }
    ];

    const ExperienceCard = ({ experience }) => {
        const cardStyle = {
            background: '#f9f9f9',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        };

        const headerStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
            paddingBottom: '1rem',
            marginBottom: '1rem'
        };

        const titleContainerStyle = {
            display: 'flex',
            flexDirection: 'column'
        };

        const descriptionListStyle = {
            listStyleType: 'disc',
            paddingLeft: '1.5rem',
            marginBottom: '1.1rem',
           
        };

        const descriptionItemStyle = {
            marginBottom: '0.7rem',
            color: '#2c3e50',
            lineHeight: 1.5,

        };

        const techStackStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center',
            gap: '0.5rem'
        };

        const techBadgeStyle = {
            background: '#e9ecef',
            padding: '0.5rem 1.1rem',
            borderRadius: '4px',
            fontSize: '1.2rem',
            color: '#495057'
        };

        return (
            <div style={cardStyle}>
                <div style={headerStyle}>
                    <div style={titleContainerStyle}>
                        <p  className={style.jobtitle}>{experience.title}</p>
                        <span  className={style.company}>at {experience.company}</span>
                    </div>
                    <div className={style.tenure}>{experience.tenure}</div>
                </div>

                <ul style={descriptionListStyle} className={style.descriptionList}>
                    {experience.description.map((item, index) => (
                        <li key={index} style={descriptionItemStyle}>{item}</li>
                    ))}
                </ul>

                <div style={techStackStyle}>
                    {experience.techstack.map((tech, index) => (
                        <span key={index} style={techBadgeStyle}>{tech}</span>
                    ))}
                </div>
                <div className={style.linkContainer}>
                    <a href={experience.links.live} className={style.link}> <IoIosNavigate className={style.icon} />Go Live</a>
                </div>
            </div>
        );
    };

    return (
        <section id='experience' style={containerStyle}>
            <h2 className={style.title} >Professional Experience</h2>
            <div style={experienceListStyle}>
                {experienceList.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experience;