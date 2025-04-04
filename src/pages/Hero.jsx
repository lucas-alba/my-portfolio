import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const letters = [
  { char: 'A', className: 'font-black rotate-[-12deg] scale-y-[1.4] scale-x-[1.1] skew-y-3' },
  { char: 'L', className: 'font-extralight italic rotate-[8deg] scale-x-[1.8] scale-y-[0.8] translate-y-2' },
  { char: 'B', className: 'font-extrabold rotate-[-6deg] scale-y-[1.6] skew-x-3' },
  { char: 'A', className: 'font-medium rotate-[10deg] scale-[1.3] -translate-y-1 skew-y-1' },
];

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white px-6 pt-24 pb-12 flex flex-col justify-between">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Intro Text */}
        <div className="max-w-2xl mt-24 text-left text-3xl leading-snug">
          <p>
            I’m an aspiring software engineer focused on building tools, simulations, and exploring machine learning and deep learning.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-40 flex justify-center items-end gap-4 text-white text-[18vw] leading-none"
        >
          {letters.map(({ char, className }, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const springX = useSpring(x, { stiffness: 200, damping: 15 });
            const springY = useSpring(y, { stiffness: 200, damping: 15 });

            const handleMouseMove = (e) => {
              const bounds = e.currentTarget.getBoundingClientRect();
              const centerX = bounds.left + bounds.width / 2;
              const centerY = bounds.top + bounds.height / 2;

              const dx = centerX - e.clientX;
              const dy = centerY - e.clientY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              const force = Math.min(150, 5000 / (distance + 20));
              const offsetX = (dx / distance) * force;
              const offsetY = (dy / distance) * force;

              x.set(offsetX);
              y.set(offsetY);
            };

            const resetPosition = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.span
                key={index}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetPosition}
                style={{
                  x: springX,
                  y: springY,
                  filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.25))',
                }}
                className={`transition-transform ${className}`}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;