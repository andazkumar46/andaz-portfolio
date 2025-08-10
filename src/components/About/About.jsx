import React from 'react'
import aboutImg from "../../assets/7358653-removebg-preview.png"
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 '>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
                <img className='md:h-80' src={aboutImg} alt="" />

                <ul>
                    <div className='flex gap-3 py-4' >
                        <IoArrowForward size={30} className="mt-1" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>"I’m a passionate Frontend Developer dedicated to crafting responsive, user-friendly, and visually appealing web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks like React, I combine clean code with creative design to deliver engaging digital experiences. I enjoy turning complex problems into simple, intuitive interfaces, while continuously learning and adapting to new technologies to stay ahead in the ever-evolving web development landscape."</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About