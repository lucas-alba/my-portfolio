import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import Link for routing

const projects = [
  { title: 'Trading Sim', description: 'Real-time simulator with strategy bots.', id: 1 },
  { title: 'Solar Forecasting', description: 'Daily output predictor using ML & weather APIs.', id: 2 },
  { title: 'AI Policy Visualizer', description: 'Dashboard comparing AI Act & public opinion.', id: 3 },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Smooth horizontal scroll + hard push left at end
  const x = useTransform(scrollYProgress, [0, 1.4, 1.6], ['100vw', `-${(projects.length - 1) * 100}vw`, '-200vw']);

  // Title + card row transforms
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
            {projects.map((project, index) => (
              <Link to="/TradingSim" key={1}>
                <div
                  className="w-[30vw] h-[30vw] min-w-[30vw] border border-gray-500 bg-transparent text-white p-6 flex flex-col justify-center items-start hover:scale-105 hover:rotate-1 transition-transform duration-300"
                >
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm opacity-80 leading-snug">{project.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;