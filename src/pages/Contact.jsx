import { motion } from 'framer-motion';

const Contact = () => {
  const contactItems = [
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/lucasalba/',
    },
    {
      label: 'GITHUB',
      href: 'https://github.com/lucas-alba',
    },
    {
      label: 'EMAIL',
      href: 'mailto:albal@cua.edu',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        className="text-[8vw] font-bold mb-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CONTACT
      </motion.h2>

      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {contactItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-2xl font-medium rounded-full py-6 w-full text-center hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;