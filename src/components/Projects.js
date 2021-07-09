import React from "react";
import { projects } from "../data";

function Projects(){

    return (
        <section id="projects" className="body-font text-pink-text bg-gray-primary">
      <div className="container mx-auto flex px-10 py-20 flex-col">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 custom-underline">
            Projects I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              className="sm:w-1/2 w-100 p-4 h-96">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 hover:bg-violet-primary hover:text-pink-textHover opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
        );
}

export default Projects;