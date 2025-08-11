'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: '📊 Financial Forecasting & Automation',
    description:
      'Built predictive financial models using Python, TensorFlow, and scikit-learn, integrating market and client portfolio data to automate risk analysis workflows and reduce manual review time by 35%. Created interactive Tableau dashboards for tracking key financial indicators.',
    details: 'Tools: Python, TensorFlow, scikit-learn, Tableau, SQL • Company: Impact Financial Advisors',
  },
  {
    title: '🧠 Marketing Data Analytics & Automation',
    description:
      'Developed ETL pipelines and data dashboards for consumer behavior and campaign performance analysis at UW Foster School of Business. Automated NLP experiments and predictive modeling to support marketing insights and strategic decision-making.',
    details: 'Tools: Python, R, SQL, Tableau, Airflow, Pandas • Org: UW Foster School of Business',
  },
  {
    title: '🌿 AI-Powered Environmental Data Tools',
    description:
      'Led development of AI tools to automate environmental data analysis and compliance reporting, designing a custom Transformer-based NLP model to generate planning proposals, cutting manual drafting time by 40%, and boosting processing throughput by 40%.',
    details:
      'Tools: Python, PyTorch, Hugging Face Transformers, AWS EC2 • Company: Confluence Environmental Company',
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
