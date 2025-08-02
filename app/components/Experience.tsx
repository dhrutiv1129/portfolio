'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="py-20 px-6 bg-gray-900 text-white"
		>
			<div className="max-w-4xl mx-auto text-center">
				<motion.h2
					initial={{ y: 50 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600"
				>
					Experience & Projects
				</motion.h2>

				<motion.p
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-lg text-gray-300 mb-10"
				>
					While some of my work is under NDA or tied to academic honor code policies, here's a glimpse into projects I’ve tackled under those organizations.
				</motion.p>

				<ul className="text-left text-gray-300 space-y-6">
					<li>
						<span className="font-semibold text-white">📦 Financial Assistant GPT – </span>
						Built a GPT-powered budgeting assistant to analyze transaction data and offer personalized, judgment-free financial insights  
						<br />
						<span className="text-sm text-gray-400">Tools: OpenAI API, LangChain, Pinecone • Company: Impact Financial Advisors</span>
					</li>

					<li>
						<span className="font-semibold text-white">🧠 AI Research Automation – </span>
						Built LLM pipelines to analyze enrollment trends and student engagement data at the UW Foster School of Business, automating NLP experiments and tracking performance to support academic research  
						<br />
						<span className="text-sm text-gray-400">Tools: Python, HuggingFace, Weights & Biases • Org: UW Foster School of Business</span>
					</li>


				<li>
  <span className="font-semibold text-white">🌿 Environmental Planning NLP Pipeline – </span>
  Developed and documented an NLP pipeline to generate environmental planning proposals, reducing manual drafting time by ~40% and improving document processing accuracy by 35%.  
  <br />
  <span className="text-sm text-gray-400">
    Tools: Python, BERT, TensorFlow, PyTorch, REST APIs • Company: Confluence Environmental Company
  </span>
</li>

				</ul>
			</div>
		</motion.section>
	);
}
