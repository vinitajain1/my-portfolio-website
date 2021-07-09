import React from "react";
import {AiFillLinkedin,AiFillGithub,AiOutlineDownload} from "react-icons/ai"

function About(){
    return (
        <section id="about" className="body-font text-pink-text bg-gray-primary">
          <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
                Hello, I'm Vinita.
              </h1>
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I'm a Software Engineer
              </h2>
              <p className="mb-8 leading-relaxed text-gray-grayText">
                Checkout my work below and feel free to get in touch if you want to hire me.
              </p>
              <div className="flex text-4xl">
                <a title="Open LinkedIn Profile" href="https://www.linkedin.com/in/vinita-jain-v1/" target="_blank" className="mr-5"><AiFillLinkedin className="text-violet-primary flex-shrink-0 mr-4"/></a>
                <a title="Open GitHub" href="https://github.com/vinitajain1" target="_blank" className="mr-5"><AiFillGithub className="text-violet-primary flex-shrink-0 mr-4"/></a>
                <a title="Download Resume" href="./Resume.pdf" className="mr-5" download><AiOutlineDownload className="text-violet-primary flex-shrink-0 mr-4"/></a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-22 md:w-1/4 w-5/6">
              <img
                className="object-cover object-center rounded"
                src="./profile.jpg"
              />
            </div>
          </div>
        </section>
      );
}

export default About;