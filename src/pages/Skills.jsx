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
      className="min-h-screen bg-black text-white pt-4 pb-16 px-6 flex flex-col items-center"
    >
      {/* 💥 Dramatic Header */}
      <motion.h2
        className="text-[8vw] font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
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