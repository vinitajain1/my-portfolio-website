import React from "react";
import { skills } from "../data";
import { AiFillCheckCircle } from "react-icons/ai";

function Skills(){
    return (
        <section id="skills" className="body-font text-pink-text bg-gray-primary">
        <div className='container mx-auto flex px-10 py-20 flex-col'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 custom-underline">Skills &amp; Technologies</h1>
            </div>
        
            <div className="flex flex-wrap items-center">
                {skills.map(skill=>(
                    <div key={skill} className='pb-2 pr-2 w-96'>
                        <div className="bg-gray-expBackground rounded flex p-4 h-full items-center">
                        <AiFillCheckCircle className="text-violet-primary w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">{skill}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
        );
}

export default Skills;