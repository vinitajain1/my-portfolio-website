import React from "react";
import {experience} from "../data";

function Experience(){
    return (
        <section id="experience" className="body-font text-pink-text bg-gray-primary">
          <div className="container mx-auto flex px-10 py-20 flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white custom-underline">
               My Experience
              </h1>
            </div>
            <div className="flex flex-col flex-wrap">
              {experience.map((exp)=>(
                  <div className="flex  bg-gray-expBackground pl-5 py-5 pr-5 rounded-tr-2xl rounded-bl-2xl w-max">
                    <img src={exp.companyLogo} className="w-20 h-20"></img>
                    <div className="ml-10 w-92">
                      <div>{exp.designation}</div>
                      <div>{exp.companyName}</div>
                      <div className="text-gray-grayText">{exp.fromToDate}</div>
                      <div className="text-gray-grayText">{exp.location}</div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        );
}

export default Experience;