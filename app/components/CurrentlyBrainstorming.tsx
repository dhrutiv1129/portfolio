'use client';

import { motion } from 'framer-motion';

export default function CurrentlyBrainstorming() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
       
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed text-center"
        >
          Throughout my roles, I’ve worn many hats. As a product manager, I defined the why and what. 
          As an engineer, I designed the how. As a researcher, I translated complex data into actionable insights. 
          As an entrepreneur, I turned ideas into tangible products. Together, these experiences shape how I approach 
          problems—balancing strategy with execution to build solutions that are technically robust, 
          user-centered, and built to scale.
        </motion.p>
      </div>
    </motion.section>
  );
}
