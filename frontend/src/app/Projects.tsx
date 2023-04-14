'use client';
import FeaturedProject from './FeaturedProject';
import { motion } from 'framer-motion';
import Project from './Project';

interface ProjectsProps {
  projects: {
    id: number;
    isFeatured: boolean;
    slug: string;
    title: string;
    summary: string;
    type: string;
    link: string;
    github: string;
    img: string;
  }[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <main className='flex flex-col items-center justify-center w-full mb-16'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className='w-full mb-16 font-bold text-center text-8xl xl:text-6xl md:text-4xl text-dark dark:text-light'
      >
        My Projects
      </motion.h2>

      <div className='grid grid-cols-12 gap-24 gap-y-32 lg:gap-12 lg:gap-y-16 xl:gap-16 xl:gap-y-24'>
        {projects.map((project) => {
          if (project.isFeatured) {
            return (
              <FeaturedProject
                key={project.slug}
                type={project.type}
                title={project.title}
                summary={project.summary}
                img={project.img}
                link={project.link}
                github={project.github}
              />
            );
          } else {
            return (
              <Project
                key={project.slug}
                type={project.type}
                title={project.title}
                img={project.img}
                link={project.link}
                github={project.github}
              />
            );
          }
        })}
      </div>
    </main>
  );
};
export default Projects;
