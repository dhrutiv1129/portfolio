'use client';

import { motion } from 'framer-motion';

const skills = [
  // Product Management
  'Product Strategy',
  'Roadmapping',
  'Market Research',
  'User Research & Testing',
  'Agile / Scrum',
  'Stakeholder Management',
  'Metrics & Analytics',
  'Go-to-Market Planning',

  // Technical
  'AI Automation',
  'Machine Learning',
  'Data Engineering',
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'REST APIs',
  'GraphQL',
  'Python',
  'Docker',
  'Kubernetes',
  'AWS Cloud',
  'ETL Pipelines',
];

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full py-20 px-6 bg-gradient-to-r from-purple-400 to-blue-600 text-white flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-2xl p-6 text-center shadow-md hover:bg-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white/90">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
