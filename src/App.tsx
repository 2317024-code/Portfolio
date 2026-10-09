/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ResearchSpotlight } from './components/ResearchSpotlight';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Interactive3DBackground } from './components/Interactive3DBackground';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSandbox = () => {
    const sandboxElem = document.getElementById('sandbox');
    if (sandboxElem) {
      sandboxElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200 relative">
      {/* Global Interactive 3D Cursor-reactive Background Field */}
      <Interactive3DBackground />

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Split-Screen Hero with oversized typography & metric strip */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* Selected Works Bento Grid */}
        <ProjectsSection onOpenSandbox={scrollToSandbox} />

        {/* Interactive Technical Sandboxes (SheetFlow, NexState, XAI) */}
        <InteractiveDemo />

        {/* ICODSES 2026 Conference Research Spotlight */}
        <ResearchSpotlight />

        {/* Experience & Internships Timeline */}
        <ExperienceTimeline />

        {/* Honors, Certifications, Education & Multilingual Matrix */}
        <AchievementsSection />

        {/* Contact Form & Direct Reaches */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* ATS-Ready Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
