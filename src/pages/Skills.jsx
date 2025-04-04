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
      title: 'Libraries',
      items: [
        { name: 'OpenCV', level: 'Experienced' },
        { name: 'PyTorch', level: 'Intermediate' },
        { name: 'Tensorflow', level: 'Intermediate' },
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
        className="min-h-screen bg-black text-white pt-4 pb-8 px-6 flex flex-col items-center"
      >
        <h2 className="text-[8vw] font-bold mb-16">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {skills.map((category, index) => (
            <div key={index} className="border border-gray-600 rounded-2xl p-8">
              <h3 className="text-3xl font-semibold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="font-bold text-lg">{skill.name}</span>
                    <span className="text-sm opacity-75">{skill.level}</span>
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
  