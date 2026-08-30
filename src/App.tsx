/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { ProjectModal } from './components/ProjectModal';
import { PORTFOLIO_PROJECTS } from './data/siteData';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { SEOServicesPage } from './pages/SEOServicesPage';
import { GoogleBusinessProfilePage } from './pages/GoogleBusinessProfilePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath, selectedProjectId, closeProjectModal } = useRouter();

  // Selected project for modal
  const activeProject = PORTFOLIO_PROJECTS.find(
    (p) => p.id === selectedProjectId
  ) || null;

  // Route Resolver
  const renderRoute = () => {
    // Normalize path by stripping trailing slash (unless it's just '/')
    const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

    switch (normalized) {
      case '/':
        return <HomePage />;
      case '/services':
        return <ServicesPage />;
      case '/services/web-development':
        return <WebDevelopmentPage />;
      case '/services/seo':
        return <SEOServicesPage />;
      case '/services/google-business-profile':
        return <GoogleBusinessProfilePage />;
      case '/projects':
        return <ProjectsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-and-conditions':
        return <TermsPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans antialiased">
      {/* Subtle Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Global Header */}
      <Header />

      {/* Main Page Body */}
      <main className="flex-1 w-full relative z-10 pb-20">
        {renderRoute()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
