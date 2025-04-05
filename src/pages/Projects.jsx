import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Trading Sim',
    description: 'Real-time simulator with strategy bots.',
    link: '/TradingSim',
  },
  {
    title: 'Solar Forecasting',
    description: 'Daily output predictor using ML & weather APIs.',
    link: 'https://apex.oracle.com/pls/apex/r/carce/carce/solar-prediction-gbr-hosting-page?session=12883315525910',
  },
  {
    title: 'DNA Storage',
    description: 'Encoding binary files into synthetic DNA with Python.',
    link: 'https://github.com/lucas-alba/DNA-Storage',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1.4, 1.6], ['100vw', `-${(projects.length - 1) * 100}vw`, '-200vw']);
  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);
  const rowOpacity = useTransform(scrollYProgress, [1.4, 1.6], [1, 0]);
  const rowScale = useTransform(scrollYProgress, [1.4, 1.6], [1, 0.85]);
  const rowY = useTransform(scrollYProgress, [1.4, 1.6], [0, 100]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-[210vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-black px-12">
        <motion.h2
          className="text-[8vw] font-bold mb-32 text-left"
          style={{ opacity: titleOpacity }}
        >
          FEATURED PROJECTS
        </motion.h2>

        <div className="relative h-[30vw] overflow-hidden">
          <motion.div
            style={{
              x,
              opacity: rowOpacity,
              scale: rowScale,
              y: rowY,
            }}
            className="flex gap-12 will-change-transform"
          >
            {projects.map((project, index) => {
              const isExternal = project.link.startsWith('http');

              const Card = (
                <div
                  className="w-[30vw] h-[30vw] min-w-[30vw] border border-gray-500 bg-transparent text-white p-6 flex flex-col justify-center items-start hover:scale-105 hover:rotate-1 transition-transform duration-300"
                >
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm opacity-80 leading-snug">{project.description}</p>
                </div>
              );

              return isExternal ? (
                <a
                  href={project.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              ) : (
                <Link to={project.link} key={index}>
                  {Card}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;