'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: '📊 Financial Assistant GPT',
    description:
      'Built a GPT-powered budgeting assistant leveraging AI automation to analyze transaction data and deliver personalized, judgment-free financial insights with scalable APIs and serverless infrastructure.',
    details: 'Tools: OpenAI API, LangChain, Pinecone • Company: Impact Financial Advisors',
  },
  {
    title: '🧠 AI Research Automation',
    description:
      'Developed and deployed LLM pipelines and n8n workflow automations for enrollment trend analysis and student engagement prediction at UW Foster School of Business, automating NLP experiments with robust data engineering and performance tracking.',
    details: 'Tools: Python, HuggingFace, Weights & Biases, n8n • Org: UW Foster School of Business',
  },
  {
    title: '🌿 Environmental Planning NLP Pipeline',
    description:
      'Engineered an end-to-end NLP pipeline to generate environmental planning proposals, reducing manual drafting time by ~40% and improving document processing accuracy by 35%, utilizing REST APIs and scalable ML frameworks.',
    details:
      'Tools: Python, BERT, TensorFlow, PyTorch, REST APIs • Company: Confluence Environmental Company',
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600"
        >
          My Work Experience
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto"
        >
          While some of my work is under NDA or tied to academic honor code policies, here is a glimpse into projects I’ve tackled under those organizations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(({ title, description, details }, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl bg-gray-800 p-6 shadow-lg transition-transform duration-300 hover:shadow-xl ${
                i === 2 ? 'md:col-span-2 mx-auto max-w-xl' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <p className="text-sm text-gray-400">{details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
