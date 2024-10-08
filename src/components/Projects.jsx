import React, { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import {  Learning_Application ,Hospital_Application ,Chat_Application ,HR_dashboard } from "../assets/images/index.js"

function Projects() {
  const [visible, setVisible] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  const projects = [
    {
      id: 1,
      image: Hospital_Application,
      imageAlt: "Hospital administration system",
      name: "Hospital Administration System",
      description: "A comprehensive system designed to manage various administrative functions, including services, human resources, requests, guarding duty, and prime calculations. The system ensures seamless interaction between these components, providing an efficient and streamlined solution for complex administrative processes.",
      links: {
        gitHub: "https://github.com/arafet1611/HOSPITAL-MANAGEMENT-SYSTEM",
      },
      tags: ["React", "Node","Express", "MongoDb", "redux-toolkit", "GraphQl","BootStrap"]
    },
    {
      id: 2,
      image: Chat_Application,
      imageAlt: "Chatting In Realtime Application",
      name: "Chatting In Realtime Application",
      description: "A real-time chat application that enables secure peer-to-peer and group communication, with each conversation kept separate and protected to ensure privacy and confidentiality.",
      links: {
        gitHub: "https://github.com/arafet1611/MERN-ChatWare-Application",
      },
      tags: ["react", "Node", "Express", "MongoDb","BootStrap" , "socket.io"]
    },
    {
      id: 3,
      image: Learning_Application,
      imageAlt: "Learning Management Application",
      name: "Learning Management Application",
      description: "Application where teachers share courses with students, who must pass a quiz to gain access.",
      links: {
        gitHub: "https://github.com/arafet1611/learning-managment-system",
      },
      tags: ["react", "Node", "Express", "MongoDb","BootStrap" ]
    },
    {
      id: 4,
      image: HR_dashboard,
      imageAlt: "Employee attendance management and dashboard",
      name: "Employee Attendance Management and Dashboard",
      description: "An application that manages employee attendance and absences while providing detailed statistics through an intuitive dashboard for easy monitoring and analysis.",
      links: {
        gitHub: "https://github.com/arafet1611/HRB",
      },
      tags: ["react", "Node", "Express", "MongoDb","BootStrap" ,"ChartJs"]
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    if (isLargeScreen) {
      setVisible(index);
    }
  };

  return (
    <div className="pb-5 h-auto my-20" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex max-md:flex-wrap flex-wrap justify-between gap-y-5 gap-x-2">
        {projects.map(cards => {
          return (
            <div 
              className="max-md:w-[49%] w-[49%] max-sm:w-full h-[300px] rounded overflow-hidden shadow-lg hover:shadow-indigo-500 border border-white relative" 
              key={cards.id} 
              onMouseOver={() => handleHover(cards.id)} 
              onMouseLeave={() => setVisible(0)}
            >
              <img className="w-full h-full object-cover" src={cards.image} alt={cards.imageAlt} />
              <div className={`${visible === cards.id || !isLargeScreen ? 'absolute flex-col flex justify-end bg-black bg-opacity-45 inset-0 bg-gradient-to-t from-black via-transparent' : 'hidden'} max-md:from-transparent max-md:static max-md:bg-white w-full`}>
                <div className="px-4">
                  <div className="flex items-center gap-5">
                    <h1 className="font-bold text-xl mb-1 mt-1 text-white max-md:text-black">
                      {cards.name}
                    </h1>
                    <a 
                      href={cards.links.gitHub} 
                      className="font-bold text-xl mb-1 mt-1 max-md:text-black text-white cursor-pointer hover:scale-110" 
                      target="_blank" 
                      title="Github Repo" 
                      rel="noreferrer"
                    >
                      <FaGithub /> 
                    </a>
                  </div>
                  <p className="text-gray-200 max-md:text-gray-600 text-base">
                    {cards.description}
                  </p>
                </div>

                <div className="px-4 pt-4 pb-2">
                  {cards.tags.map((element, index) => (
                    <span 
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" 
                      key={index}
                    >
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;
