import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Trading Sim - Live Demo',
    description: 'Real-time simulator with strategy bots.',
    link: '/TradingSim',
  },
  {
    title: 'Solar Forecasting - Live Demo',
    description: 'Daily output predictor using ML & weather APIs.',
    link: 'https://apex.oracle.com/pls/apex/r/carce/carce/solar-prediction-gbr-hosting-page?session=12883315525910',
    external: true,
  },
  {
    title: 'DNA Storage - Github',
    description: 'Storing data in DNA molecules. Research-backed project.',
    link: 'https://github.com/lucas-alba/DNA-Storage',
    external: true,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  useScroll({ target: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 bg-black text-white"
    >
      <div className="flex flex-col items-center px-6 md:px-12">
        <motion.h2
          className="text-[8vw] font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FEATURED PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => {
            const Wrapper = project.external ? 'a' : Link;
            const wrapperProps = project.external
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: project.link };

            return (
              <Wrapper key={index} {...wrapperProps}>
                <div className="border border-gray-500 bg-[#111] hover:bg-[#1a1a1a] text-white p-6 rounded-2xl flex flex-col justify-between h-full transition-transform hover:scale-[1.02]">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm opacity-80 leading-snug">{project.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;