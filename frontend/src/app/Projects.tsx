'use client';
import FeaturedProject from './FeaturedProject';
import { motion } from 'framer-motion';
import Project from './Project';

const Projects = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full mb-16'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className='w-full mb-16 font-bold text-center text-8xl text-dark dark:text-light'
      >
        My Projects
      </motion.h2>

      <div className='grid grid-cols-12 gap-24 gap-y-32'>
        <FeaturedProject
          title='Action Backers'
          summary="Action Backers is an innovative sports betting analytics platform that can help you increase your winnings and make more informed decisions. Our cutting-edge data and analytics tools provide valuable insights that can give you an edge in the competitive world of sports betting. I'm proud to say that Action Backers is a platform that I personally built from the ground up, with a commitment to excellence and a passion for sports betting."
          img='https://res.cloudinary.com/djr4sjcgh/image/upload/v1681097652/Minimalist_Neutral_Multi_Device_Computer_Mockup_Website_Launch_Instagram_Post_oq2uli.png'
          link='https://www.actionbackers.com'
          github='https://github.com/bolg55'
          type='Featured Project'
        />
        <Project
          title='Notflix. A Netflix clone'
          img='https://res.cloudinary.com/djr4sjcgh/image/upload/v1681104211/Copy_of_Mockup_template_lw6eec.png'
          link='https://notflix-omega.vercel.app/'
          github='https://github.com/bolg55/notflix'
          type='Personal Project'
        />
        <Project
          title='SaaS Boilerplate'
          img='https://res.cloudinary.com/djr4sjcgh/image/upload/v1681105430/saas-boilerplate_tq3qw1.png'
          link='https://github.com/bolg55/SaaS-Starter'
          github='https://github.com/bolg55/SaaS-Starter'
          type='Open Source Project'
        />

        <FeaturedProject
          title='Spotify Clone'
          summary='This Spotify clone uses the Spotify API to connect to your existing account. Fully functional, it plays songs, brings in playlists, and controls the Spotify desktop or phone app. Persists logged in state and authenticates user using Auth.js (Formerly NextAuth).'
          img='https://res.cloudinary.com/djr4sjcgh/image/upload/v1681106289/Spotify_Clone_1_kdduw5.png'
          link='https://spotify-clone-bolg55.vercel.app/'
          github='https://github.com/bolg55/spotify-clone'
          type='Featured Project'
        />
        <Project
          title='NHL Machine Learning Model'
          img='https://res.cloudinary.com/djr4sjcgh/image/upload/v1681108766/NHL_Model_ojmmmx.png'
          link='https://github.com/bolg55/NHL_model_2021'
          github='https://github.com/bolg55/NHL_model_2021'
          type='Personal Project'
        />
      </div>
    </main>
  );
};
export default Projects;
