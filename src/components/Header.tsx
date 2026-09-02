import React, { useState, useEffect } from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Wrench, 
  Cpu, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  FileText
} from 'lucide-react';
import { serviceAreas } from '../data/servicesData';
import { companyData } from '../data/companyData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string, areaOrServiceSlug?: string) => void;
  onOpenQuote: (preselectedServiceId?: string) => void;
  onReplayIntro: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenQuote,
  onReplayIntro
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, areaOrServiceSlug?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(sectionId, areaOrServiceSlug);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#05080e]/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-2.5' 
          : 'bg-gradient-to-b from-[#05080e]/95 via-[#05080e]/75 to-transparent py-3.5'
      }`}
    >
      {/* Top Thin Hazard Line */}
      <div className="w-full h-1 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_8px,#000000_8px,#000000_16px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between">
          
          {/* Official CAT ENERGY Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center group text-left cursor-pointer focus:outline-none"
          >
            <CatEnergyLogo 
              size="md" 
              variant="horizontal" 
              theme="gold" 
              subtitleText="AUDITORÍA, CONSULTORÍA Y SERVICIOS EN ENERGÍA" 
              animated={true}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-inicio"
              onClick={() => handleNavClick('inicio')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                activeSection === 'inicio'
                  ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Inicio
            </button>

            <button
              id="nav-link-nosotros"
              onClick={() => handleNavClick('nosotros')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                activeSection === 'nosotros'
                  ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Nosotros & Equipo
            </button>

            {/* Dropdown Services Menu */}
            <div className="relative">
              <button
                id="nav-link-servicios"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                  ['gestion-energia', 'gestion-mantenimiento', 'subestaciones-at-mt-bt'].includes(activeSection)
                    ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>Servicios</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-96 bg-[#0c1220] border border-amber-500/30 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-3 py-1 mb-1 font-mono-tech">
                    Líneas de Especialización CAT ENERGY
                  </div>

                  <button
                    onClick={() => handleNavClick('gestion-energia')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 border border-amber-500/20">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400">
                        01. Consultoría en Gestión de la Energía
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Calidad de energía (Clase A), auditorías y planes de acción
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('gestion-mantenimiento')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 border border-emerald-500/20">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-400">
                        02. Seguridad, IPERC & Contingencia
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Matrices IPERC, Mapas de Riesgo, MATPEL y Cero Accidentes
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('subestaciones-at-mt-bt')}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 border border-sky-500/20">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-sky-400">
                        03. Mantenimiento de Subestaciones AT/MT
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Patios de llaves 500kV, transformadores, gas SF6 y SSAA
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-link-proyectos"
              onClick={() => handleNavClick('proyectos-reales')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                activeSection === 'proyectos-reales'
                  ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Trabajos Realizados
            </button>

            <button
              id="nav-link-diagnostico"
              onClick={() => handleNavClick('diagnostico-eficiencia')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                activeSection === 'diagnostico-eficiencia'
                  ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Calculadora
            </button>

            <button
              id="nav-link-blog"
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-bold tracking-wide uppercase font-mono-tech rounded-lg transition-colors cursor-pointer ${
                activeSection === 'blog'
                  ? 'text-[#F59E0B] bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Publicaciones
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Phone / Contact Badge */}
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono-tech transition-colors"
              title="Llamada Directa"
            >
              <PhoneCall size={14} className="text-amber-400" />
              <span className="font-bold">{companyData.phoneFormatted}</span>
            </a>

            {/* Replay Cinematic Intro */}
            <button
              onClick={onReplayIntro}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700 transition-colors text-xs font-mono-tech cursor-pointer"
              title="Reproducir Presentación 3D"
            >
              <Sparkles size={16} />
            </button>

            {/* Main CTA Quote Button */}
            <button
              id="header-quote-btn"
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#e59408] hover:to-[#b45309] text-black font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-mono-tech"
            >
              <span>COTIZAR</span>
              <ArrowRight size={14} className="stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1220] border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('inicio')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold font-mono-tech uppercase text-white hover:bg-slate-800"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold font-mono-tech uppercase text-white hover:bg-slate-800"
            >
              Nosotros & Perfil
            </button>
            <button
              onClick={() => handleNavClick('gestion-energia')}
              className="w-full text-left px-4 py-2 rounded-xl text-xs font-mono-tech text-amber-300 hover:bg-slate-800 pl-6"
            >
              &bull; 01. Consultorías en Gestión de Energía
            </button>
            <button
              onClick={() => handleNavClick('gestion-mantenimiento')}
              className="w-full text-left px-4 py-2 rounded-xl text-xs font-mono-tech text-amber-300 hover:bg-slate-800 pl-6"
            >
              &bull; 02. Seguridad, IPERC & Contingencias
            </button>
            <button
              onClick={() => handleNavClick('subestaciones-at-mt-bt')}
              className="w-full text-left px-4 py-2 rounded-xl text-xs font-mono-tech text-amber-300 hover:bg-slate-800 pl-6"
            >
              &bull; 03. Mantenimiento Subestaciones AT/MT
            </button>
            <button
              onClick={() => handleNavClick('proyectos-reales')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold font-mono-tech uppercase text-white hover:bg-slate-800"
            >
              Trabajos Realizados (Casos Reales)
            </button>
            <button
              onClick={() => handleNavClick('diagnostico-eficiencia')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold font-mono-tech uppercase text-white hover:bg-slate-800"
            >
              Calculadora de Pérdidas
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold font-mono-tech uppercase text-white hover:bg-slate-800"
            >
              Publicaciones Técnicas
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-extrabold text-sm uppercase tracking-wider text-center"
            >
              Solicitar Cotización Técnica
            </button>
            <a
              href={`https://wa.me/${companyData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <PhoneCall size={14} />
              <span>WhatsApp: {companyData.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
