'use client';

import { motion } from 'framer-motion';

export default function CurrentlyBrainstorming() {
  const projects = [
    {
      title: 'Finsight — Founder & Developer',
      subtitle: 'AI-Powered Financial Forecasting Tool — Jul 2025 – Present',
      points: [
        'Developing a personal finance platform generating AI-driven financial “report cards” and personalized recommendations based on user data.',
      ],
      link: 'https://www.notion.so/dhruti-portfolio/finsight-braindump-243e4feed2738024bd38e260d8ac3816?showMoveTo=true&saveParent=true',
    },
    
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 text-center"
        >
          Currently Brainstorming...
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ title, subtitle, points, link }, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-lg bg-gray-800 p-6 shadow-md flex flex-col"
            >
              <h3 className="font-semibold text-white text-xl mb-2">{title}</h3>
              {subtitle && <p className="italic text-sm mb-4 text-gray-400">{subtitle}</p>}
              <ul className="list-disc list-inside space-y-2 flex-grow text-gray-300 mb-6">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start px-4 py-2 rounded-md bg-gradient-to-r from-purple-400 to-blue-600 text-white font-semibold hover:brightness-110 transition"
                >
                  Learn More
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
