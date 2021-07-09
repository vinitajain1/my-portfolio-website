import React from "react";

function Navbar() {
  return (
    <header className="bg-gray-primary md:sticky top-0 z-10 text-pink-text">
      <div className="container mx-auto flex flex-wrap p-5 flex-row">
        <a className="font-medium w-1/6">
          <a href="#about" className="text-xl name-underline">
            Vinita Jain
          </a>
        </a>
        <nav className="flex flex-wrap items-end text-base text-gray-grayText w-4/5 justify-end flex-col md:flex-row">
          <a href="#projects"
           className="py-1 px-3 focus:outline-none hover:bg-violet-primary hover:text-pink-textHover rounded">
            Projects
          </a>
          <a href="#skills"
           className="py-1 px-3 focus:outline-none hover:bg-violet-primary hover:text-pink-textHover rounded">
            Skills
          </a>
          <a href="#experience"
           className="py-1 px-3 focus:outline-none hover:bg-violet-primary hover:text-pink-textHover rounded">
            Experience
          </a>
          <a
          href="#contact"
          className="py-1 px-3 focus:outline-none bg-violet-primary text-pink-textHover rounded">
          Hire Me
        </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;