import React, { useState } from 'react';
import { ServiceArea, ServiceItem } from '../types';
import { ServiceCard } from './ServiceCard';
import { 
  Zap, 
  Wrench, 
  Cpu, 
  Filter, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { serviceAreas, servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

interface ThreeAreasSectionProps {
  selectedAreaId: string;
  onSelectArea: (areaId: string) => void;
  onViewService: (service: ServiceItem) => void;
  onQuickQuote: (service: ServiceItem) => void;
}

export const ThreeAreasSection: React.FC<ThreeAreasSectionProps> = ({
  selectedAreaId,
  onSelectArea,
  onViewService,
  onQuickQuote
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(selectedAreaId || 'all');

  // Keep in sync with parent when prop changes
  React.useEffect(() => {
    if (selectedAreaId) {
      setActiveFilter(selectedAreaId);
    }
  }, [selectedAreaId]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    if (filterId !== 'all') {
      onSelectArea(filterId);
    }
  };

  const displayedServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter(s => s.areaId === activeFilter);

  const currentAreaInfo = serviceAreas.find(a => a.id === activeFilter);

  return (
    <section id="servicios-areas" className="py-20 bg-[#0b0f17] text-white relative">
      
      {/* Background Decorative Lighting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] font-mono-tech">
            <Sparkles size={13} />
            <span>PORTAFOLIO DE ESPECIALIDADES TÉCNICAS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.08em] uppercase font-display-wide text-white">
            TRES GRANDES ÁREAS DE <span className="text-[#FFC700]">CATENERGY</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-light">
            Soluciones de ingeniería electromecánica y eficiencia energética diseñadas para elevar la confiabilidad de sus activos y optimizar su matriz de consumo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            id="filter-all-services"
            onClick={() => handleFilterChange('all')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer font-subheading tracking-wider uppercase ${
              activeFilter === 'all'
                ? 'bg-[#FFC700] text-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Filter size={14} />
            <span>TODOS LOS SERVICIOS ({servicesData.length})</span>
          </button>

          <button
            id="filter-area-gestion-energia"
            onClick={() => handleFilterChange('gestion-energia')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer font-subheading tracking-wider uppercase ${
              activeFilter === 'gestion-energia'
                ? 'bg-[#FFC700] text-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Zap size={14} className={activeFilter === 'gestion-energia' ? 'text-black' : 'text-amber-400'} />
            <span>01. GESTIÓN DE LA ENERGÍA</span>
          </button>

          <button
            id="filter-area-gestion-mantenimiento"
            onClick={() => handleFilterChange('gestion-mantenimiento')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer font-subheading tracking-wider uppercase ${
              activeFilter === 'gestion-mantenimiento'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Wrench size={14} className={activeFilter === 'gestion-mantenimiento' ? 'text-black' : 'text-emerald-400'} />
            <span>02. SEGURIDAD & MATPEL</span>
          </button>

          <button
            id="filter-area-subestaciones"
            onClick={() => handleFilterChange('subestaciones-at-mt-bt')}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all cursor-pointer font-subheading tracking-wider uppercase ${
              activeFilter === 'subestaciones-at-mt-bt'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Cpu size={14} className={activeFilter === 'subestaciones-at-mt-bt' ? 'text-black' : 'text-amber-300'} />
            <span>03. SUBESTACIONES AT / MT</span>
          </button>
        </div>

        {/* Highlight Banner if a specific area is active */}
        {currentAreaInfo && (
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#101726] to-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono-tech px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase">
                  Especialidad Seleccionada
                </span>
                <span className="text-xs text-slate-400">
                  {currentAreaInfo.services.length} Servicios Técnicos Disponibles
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {currentAreaInfo.title}
              </h3>
              <p className="text-sm text-slate-300">
                {currentAreaInfo.description}
              </p>
              <p className="text-xs italic text-amber-400 font-semibold pt-1">
                &ldquo;{currentAreaInfo.impactPhrase}&rdquo;
              </p>
            </div>

            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(`Hola CATENERGY, deseo consultar sobre los servicios de ${currentAreaInfo.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all"
            >
              <PhoneCall size={16} />
              <span>Consultar Especialidad</span>
            </a>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewService={onViewService}
              onQuickQuote={onQuickQuote}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
