import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', level: 'Experienced' },
      { name: 'Python', level: 'Experienced' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Basic' },
      { name: 'C++', level: 'Basic' },
    ],
  },
  {
    title: 'Libraries & Tools',
    items: [
      { name: 'OpenCV', level: 'Experienced' },
      { name: 'PyTorch', level: 'Intermediate' },
      { name: 'TensorFlow', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git', level: 'Intermediate' },
      { name: 'Spring Boot', level: 'Basic' },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white pt-4 pb-48 px-6 flex flex-col items-center overflow-visible"
    >
      {/* 💜 Background Glow */}
      <div className="absolute top-[25%] left-[15%] w-[60vw] h-[60vw] bg-[#4c1d95] rounded-full opacity-20 blur-[60px] z-0" />
      <div className="absolute bottom-[-20%] right-[10%] w-[60vw] h-[60vw] bg-[#3b82f6] rounded-full opacity-15 blur-[60px] z-0" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

      <motion.h2
        className="relative z-20 text-[8vw] font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SKILLS
      </motion.h2>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-600 rounded-2xl p-8 shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-3xl font-semibold mb-6 text-white">{category.title}</h3>
            <ul className="space-y-4">
              {category.items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between border-b border-gray-700 pb-2"
                >
                  <span className="font-bold text-lg text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;