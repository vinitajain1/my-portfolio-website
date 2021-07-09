import React from "react";
import {useState} from "react";

function Contact(){
     const [name,setName]=useState("");
     const [email,setEmail]=useState("");
     const [message,setMessage]=useState("");

    const handlerForName=function(e){
        setName(e.target.value)
    }
    const handlerForEmail=function(e){
        setEmail(e.target.value)
    }

    const handlerForMessage=function(e){
        setMessage(e.target.value)
     }
     function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    const handleOnSubmit=function(e){
        e.preventDefault()
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
    }

    return (
        <section id="contact" className="text-pink-text bg-gray-primary body-font">
          <div className="container mx-auto flex px-10 py-10 flex-col ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 custom-underline">
                    Contact Information
                </h1>
            </div>
            <div className="container flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed/v1/place?q=B2-18+Kumar+aangan+housing+society+Pune,Yerawada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
                <div className="bg-violet-primary text-pink-textHover relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        B2-18, Kumar Aangan housing society,Yerawada<br/>Airport Road,Pune-411006
                    </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-indigo-400 leading-relaxed">
                        vinitajain319@gmail.com
                    </a>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">+91-8551083388</p>
                    </div>
                </div>
                </div>
                <form netlify name="contact" className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full" onSubmit={handleOnSubmit}>
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Hire Me
                </h2>
                <div className="relative mb-4">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handlerForName}
                    placeHolder="Enter name"
                    className="w-full text-black rounded border text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeHolder="Enter email"
                    onChange={handlerForEmail}
                    className="w-full text-black rounded border text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <textarea
                    id="message"
                    name="message"
                    placeHolder="Enter Message"
                    onChange={handlerForMessage}
                    className="w-full text-black rounded border h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-violet-primary border-0 py-2 px-6 focus:outline-none rounded text-lg" Submit>
                    Submit
                </button>
                </form>
            </div>
          </div>
        </section>
      );
}

export default Contact;