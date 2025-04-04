import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-white">Lucas Alba</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="space-y-1 focus:outline-none"
        >
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
        </button>
      </div>

      {/* Floating Guide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-6 bg-white text-black rounded-xl shadow-xl p-6 space-y-4 z-50"
          >
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-lg hover:opacity-70 transition">
              Projects
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-lg hover:opacity-70 transition">
              Skills
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-lg hover:opacity-70 transition">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
