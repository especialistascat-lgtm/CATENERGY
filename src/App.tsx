import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { HeroValueProp } from './components/HeroValueProp';
import { ThreeAreasSection } from './components/ThreeAreasSection';
import { ProjectsHistorySection } from './components/ProjectsHistorySection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { QuoteSection } from './components/QuoteSection';
import { EnergyEfficiencyDiagnostic } from './components/EnergyEfficiencyDiagnostic';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';
import { servicesData } from './data/servicesData';
import { ServiceItem } from './types';
import { Play } from 'lucide-react';

export default function App() {
  const [showCinematicIntro, setShowCinematicIntro] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedQuoteServiceId, setPreselectedQuoteServiceId] = useState<string>('');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);

  // Check if user previously completed intro in session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('catenergy_intro_completed');
    if (hasSeenIntro === 'true') {
      setShowCinematicIntro(false);
    }
  }, []);

  const handleFinishIntro = () => {
    setShowCinematicIntro(false);
    sessionStorage.setItem('catenergy_intro_completed', 'true');
    // Scroll to top of value prop smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayIntro = () => {
    setShowCinematicIntro(true);
  };

  const handleNavigate = (sectionId: string, areaOrServiceSlug?: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'diagnostico-eficiencia') {
      setIsDiagnosticOpen(true);
      return;
    }

    if (['gestion-energia', 'gestion-mantenimiento', 'subestaciones-at-mt-bt'].includes(sectionId)) {
      setSelectedAreaId(sectionId);
      const element = document.getElementById('servicios-areas');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (areaId: string) => {
    setSelectedAreaId(areaId);
    const element = document.getElementById('servicios-areas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = servicesData.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const handleOpenQuote = (serviceOrTitle?: string) => {
    if (serviceOrTitle) {
      setPreselectedQuoteServiceId(serviceOrTitle);
    }
    const quoteElement = document.getElementById('contacto');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05080e] text-slate-100 font-sans selection:bg-[#F59E0B] selection:text-black">
      
      {/* 1. Cinematic Hero Intro with 3D Wide Typography & Realistic Photos */}
      {showCinematicIntro ? (
        <HeroIntro 
          onEnterApp={handleFinishIntro} 
          onSkipIntro={handleFinishIntro} 
        />
      ) : (
        <>
          {/* Main Global Navigation Header with Official CAT ENERGY Tower Logo */}
          <Header
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onReplayIntro={handleReplayIntro}
          />

          {/* Replay Intro Floating Prompt */}
          <div className="fixed top-20 right-4 z-30 hidden lg:block">
            <button
              onClick={handleReplayIntro}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-slate-900 text-slate-300 hover:text-amber-400 border border-amber-500/40 text-[11px] font-mono-tech transition-all backdrop-blur-md shadow-lg cursor-pointer"
              title="Volver a reproducir la Presentación 3D"
            >
              <Play size={10} className="fill-current text-amber-400" />
              <span>Ver Presentación 3D</span>
            </button>
          </div>

          <main>
            {/* 2. Portada Principal — Propuesta de Valor Oficial */}
            <HeroValueProp
              onSelectArea={handleSelectArea}
              onSelectService={handleSelectServiceById}
              onOpenQuote={handleOpenQuote}
              onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
              onNavigateToProjects={() => handleNavigate('proyectos-reales')}
            />

            {/* 3. Las Tres Grandes Áreas y Catálogo de Servicios CAT ENERGY */}
            <ThreeAreasSection
              selectedAreaId={selectedAreaId}
              onSelectArea={handleSelectArea}
              onViewService={(srv) => setSelectedService(srv)}
              onQuickQuote={(srv) => handleOpenQuote(srv.id)}
            />

            {/* 4. Historial Oficial de 14 Trabajos Realizados */}
            <ProjectsHistorySection
              onOpenQuote={(title) => handleOpenQuote(title)}
            />

            {/* 5. Nosotros / Ficha SUNAT / Ing. Richter Gómez & Equipo */}
            <AboutSection 
              onOpenQuote={() => handleOpenQuote('Evaluación Técnica')} 
            />

            {/* 6. Publicaciones Técnicas & Normativas */}
            <BlogSection 
              onOpenQuote={() => handleOpenQuote('Consulta Técnica')} 
            />

            {/* 7. Solicita tu Cotización */}
            <QuoteSection
              preselectedServiceId={preselectedQuoteServiceId}
              onClearPreselected={() => setPreselectedQuoteServiceId('')}
            />
          </main>

          {/* Footer Corporativo Oficial */}
          <Footer
            onSelectArea={handleSelectArea}
            onSelectService={handleSelectServiceById}
            onOpenQuote={() => handleOpenQuote()}
          />

          {/* Modal de Detalle de Servicio */}
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onOpenQuote={(srvId) => handleOpenQuote(srvId)}
          />

          {/* Simulador de Diagnóstico de Eficiencia y Confiabilidad */}
          <EnergyEfficiencyDiagnostic
            isOpen={isDiagnosticOpen}
            onClose={() => setIsDiagnosticOpen(false)}
            onOpenQuote={(srvId) => handleOpenQuote(srvId)}
          />

          {/* Botón Flotante Permanente de WhatsApp */}
          <WhatsAppFloatingButton
            currentContextService={selectedService?.name}
          />
        </>
      )}

    </div>
  );
}
