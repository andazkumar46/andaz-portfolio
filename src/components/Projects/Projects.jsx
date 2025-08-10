import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectsCard 
            title="Youtube Clone" 
            main="A fully responsive YouTube Clone built using HTML, CSS, and JavaScript (with React for dynamic UI). It replicates core YouTube features including video playback, search functionality, and a modern, adaptive layout. " 
            />
            <ProjectsCard 
            title="Netflix Clone" 
            main="A Netflix-inspired web application built with HTML, CSS, and JavaScript (React for dynamic UI). It features a sleek, responsive design, movie browsing by categories, and smooth hover effects." 
            />
            <ProjectsCard 
            title="Portfolio Website" 
            main="A personal portfolio website designed and developed using HTML, CSS, and JavaScript to showcase my projects, skills, and experience. It features a clean, responsive layout, smooth navigation, and interactive elements to create an engaging user experience." 
            />
        </div>
    </div>
  )
}

export default Projects