'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: '📊 Financial Forecasting & Automation',
    description:
      'Designed and deployed predictive models to automate risk analysis and portfolio reviews, cutting manual review time by 35%. Delivered executive-ready dashboards that connected technical insights directly to investment decisions.',
    details: 'Tools: Python, TensorFlow, scikit-learn, Tableau, SQL • Company: Impact Financial Advisors',
  },
  {
  title: "🧠 Employee Engagement & Retention Analytics",
  description: "Built and managed ETL pipelines consolidating 500k+ HR data points, developed ML models to identify drivers of satisfaction and turnover, and automated reporting to provide real-time workforce insights.",
  details: "Tools: Python, R, SQL, Tableau, Airflow, Pandas • Org: UW Foster School of Business"
},
  {
    title: '🌿 AI-Powered Environmental Data Tools',
    description:
      'Led productization of AI tools for compliance reporting and environmental planning. Designed custom Transformer-based NLP systems to generate proposals, reducing drafting time by 50% and improving throughput for client deliverables.',
    details:
      'Tools: Python, PyTorch, Hugging Face Transformers, AWS EC2 • Company: Cascadia Consulting Group',
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full py-20 px-6 text-white bg-gradient-to-r from-purple-400 to-blue-600"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          My Work Experience
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/90 mb-12 text-center max-w-3xl mx-auto"
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
              className={`rounded-xl bg-gray-900/70 p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:shadow-xl ${
                i === 2 ? 'md:col-span-2 mx-auto max-w-xl' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="mb-4 text-white/90">{description}</p>
              <p className="text-sm text-white/70">{details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
