'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Experience from './components/Experience';
import CurrentlyBrainstorming from './components/CurrentlyBrainstorming';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<Experience />
			<ProjectsSection />
			<CurrentlyBrainstorming />
			<SkillsSection />
			<ContactSection />
			
		</div>
	);
}
