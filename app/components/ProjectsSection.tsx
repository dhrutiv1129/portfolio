'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Options Pricing Model',
    description:
      'Streamlit-based tool that implements a binomial tree model to price American-style options, integrating real-time market data via yFinance and computing historical volatility using log returns.',
    image: '/code.jpg',
    liveUrl: 'https://options-crrmmzwtzusappq8vbcamve.streamlit.app/',
    repoUrl: 'https://github.com/dhrutiv1129/options',
  },
  {
    id: 2,
    title: 'Financial Report Generator',
    description: 'Real-time chat application powered by OpenAI',
    image: '/laptop.jpg',
    liveUrl: 'https://your-live-project-2.com',
    repoUrl: 'https://github.com/dhruti/financial-report-generator',
  },
  {
    id: 3,
    title: 'ML Based Student Performance Prediction ',
    description:
      'Simple machine learning project using classifiers for predicting factors which affect student grades, using data from CSV file',
    image: '/code.jpg',
    repoUrl: 'https://github.com/dhrutiv1129/student-grades',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: "The portfolio you're looking at right here",
    image: '/laptop.jpg',
    liveUrl:
      'https://portfolio-873o9yt2d-dhrutis-projects-18c08596.vercel.app/',
    repoUrl: 'https://github.com/dhrutiv1129/portfolio/tree/main',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600"
      >
        Independent Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    View Project
                  </Link>
                )}
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
