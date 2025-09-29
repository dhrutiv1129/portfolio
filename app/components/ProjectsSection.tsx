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
    title: 'Personal Portfolio',
    description: "The portfolio you're looking at right here",
    image: '/laptop.jpg',
    liveUrl:
      'https://portfolio-873o9yt2d-dhrutis-projects-18c08596.vercel.app/',
    repoUrl: 'https://github.com/dhrutiv1129/portfolio/tree/main',
  },
  {
    id: 3,
    title: 'ML Based Student Performance Prediction',
    description:
      'Simple machine learning project using classifiers for predicting factors which affect student grades, using data from CSV file',
    image: '/code.jpg',
    repoUrl: 'https://github.com/dhrutiv1129/student-grades',
  },
  {
    id: 4,
    title: 'Finsight',
    description:
      'Developing a personal finance platform that delivers structured financial-health reports. Leverages AI to ask the least amount of questions to gain the most amount of insights. Currently building MVP and product strategy, and preparing for pitch at DubHacks Next.',
    image: '/code.jpg',
    // Notice: no liveUrl and no GitHub button here
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full py-20 px-6 text-white bg-gradient-to-r from-purple-400 to-blue-600"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Independent Projects
        </motion.h2>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden"
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
                <p className="text-white/90 mb-4">{project.description}</p>
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
                  {/* GitHub button is skipped for Finsight */}
                  {project.repoUrl && project.title !== 'Finsight' && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
