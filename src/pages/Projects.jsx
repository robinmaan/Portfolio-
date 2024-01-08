"use client"

import { Link } from "react-router-dom";
import { motion  } from "framer-motion"
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const fadeInAnimationVarient = {
  initial:{
    opacity:0,
    y:100,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration: 0.05
    }
  }
}


const Projects = () => {
 
  return (
    <motion.section 
    initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
    className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Welcome to my digital playground! Here, I bring creativity to life through my meticulously crafted frontend projects. Each line of code is a stroke of my digital brush, creating seamless and visually appealing user experiences
      Witness the evolution of user interfaces that not only captivate the eyes but also ensure a smooth and intuitive journey for every visitor.
      </p>

      <motion.div
      varient={fadeInAnimationVarient}
      initial="initial"
      whileInView="animate"
      viewport={{
        once:true,
      }}
      
      className='flex flex-wrap my-20 gap-16 '>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center animate-pulse'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain '
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins '>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <hr className='border-slate-200' />

      <CTA />
    </motion.section>
  );
};

export default Projects;