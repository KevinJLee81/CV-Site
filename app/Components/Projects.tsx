import React from "react";
import Link from "next/link";

const Projects = () => {

  const projectInfo = [
    {
      title: "CV-Site",
      description:"Built an App with React, Next.js, DaisyUI, Tailwind CSS, and TypeScript.",
      link: "https://github.com/KevinJLee81/CV-Site",
    },
    {
      title: "Image-Resizer",
      description: "Created a Lamdba function for resizing an image to 250x250.",
      link: "https://github.com/KevinJLee81/ImageResizer",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider"></div>
      </div>
      <div id="projects" className="text-4xl bg-base-100 font-bold flex justify-center pb-6">
        <h1>Projects</h1>
      </div>



      <div className="carousel w-full h-64">
        {projectInfo.map((project, index) => (
          <div key={index} className="carousel-item w-full flex flex-col relative" id={`item${index+1}`}>
            {/*<img src="../../infrastructure.png" className="absolute inset-0 w-full h-full object-cover" />*/}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          </div>
        ))}
      </div> 
      <div className="flex justify-center w-full py-2 gap-2 pb-28">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
      </div>
    </>
  );
};

export default Projects;
