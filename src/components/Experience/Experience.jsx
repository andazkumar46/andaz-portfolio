import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaYoutube } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6'
import { RiNetflixFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

const Experience = () => {
    return (
        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 color='#E34F26' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCss3 color='#E34F26' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJs color='#F7DF1E' size={50} />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaReact color='#61DAFB' size={50} />
                    </span>
                    
                </div>
                <div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <RiNetflixFill color='#E50914' size={50} />
                        <span className='text-white'>
                            <h2 className='leading-tight'>ISP Enginner, Nipl</h2>
                            <p className='text-sm leading-tight font-thin'>Jun 2022 - Jul 2023</p>
                            <ul className='text-sm p-2'>
                                <li>- My role was to find the devices faulty by using Data Analysis and asign work to my team to solve the issues.</li>
                                <li>- To find the issue i was use the tools PuTTy, SAP, Tableau and MS Excel.</li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <RiNetflixFill color='#E50914' size={50} />
                        <span className='text-white'>
                            <h2 className='leading-tight'>UTLITY Supervisor, Nipl</h2>
                            <p className='text-sm leading-tight font-thin'>Jul 2023 - Jul 2024</p>
                            <ul className='text-sm p-2'>
                                <li>- My role was to manage a team of 12 colleagues to manage uptime for network devices.</li>
                                <li>- I got best employee award -2024 for improving the uptime of our network devices from 99.65% to 99.90%.</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience