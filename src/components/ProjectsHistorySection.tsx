import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Activity,
  Award
} from 'lucide-react';
import { companyData, ClientProject } from '../data/companyData';

interface ProjectsHistorySectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ProjectsHistorySection: React.FC<ProjectsHistorySectionProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeProjectModal, setActiveProjectModal] = useState<ClientProject | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Trabajos' },
    { id: 'subestaciones', label: 'Subestaciones AT/MT & SF6' },
    { id: 'contingencia', label: 'Planes de Contingencia & MATPEL' },
    { id: 'eficiencia', label: 'Auditorías de Eficiencia' },
    { id: 'seguridad', label: 'Seguridad & IPERC' },
    { id: 'control-ssaa', label: 'Control, SSAA & Medición' }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? companyData.executedProjects 
    : companyData.executedProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="proyectos-reales" className="py-20 bg-[#070b14] text-white relative overflow-hidden">
      
      {/* Background Grid & Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Safety Stripes Accent Divider */}
      <div className="w-full h-1.5 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_10px,#000000_10px,#000000_20px)] mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] font-mono-tech">
            <Award size={13} />
            <span>HISTORIAL OFICIAL &bull; TRABAJOS REALIZADOS POR CAT ENERGY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.08em] uppercase font-display-wide text-white">
            PROYECTOS &bull; <span className="text-[#FFC700]">EXPERIENCIA EN CAMPO</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Casos documentados de éxito en infraestructura de alta tensión (500 kV, 220 kV), centrales hidroeléctricas, centros nucleares y plantas industriales.
          </p>
        </div>

        {/* Featured Clients Marquee / Badges */}
        <div className="p-6 rounded-2xl bg-black/60 border border-slate-800 shadow-xl space-y-4">
          <div className="text-center text-xs font-mono-tech text-amber-400 font-bold uppercase tracking-widest">
            Empresas y Entidades que Confían en Nuestra Ingeniería:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {companyData.featuredClients.map((client, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70 text-center hover:border-amber-500/40 transition-colors flex flex-col items-center justify-center"
              >
                <span className="font-bold text-xs text-white font-subheading tracking-wide uppercase">{client.name}</span>
                <span className="text-[9px] text-slate-400 font-mono-tech mt-0.5 line-clamp-1">{client.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-subheading uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FFC700] text-black shadow-lg shadow-amber-500/20 font-black'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Project Number Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/80 border border-amber-500/50 text-amber-400 text-xs font-black font-mono-tech shadow-lg">
                  ITEM #{project.projectNumber.toString().padStart(2, '0')}
                </div>

                {/* Voltage / Level Tag */}
                {project.voltageLevel && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold font-mono-tech uppercase tracking-wider backdrop-blur-md">
                    {project.voltageLevel}
                  </div>
                )}

                {/* Client Name Overlay */}
                <div className="absolute bottom-2 left-3 right-3">
                  <span className="text-[10px] font-mono-tech text-amber-400 uppercase font-bold tracking-wider">
                    PROPIETARIO / CLIENTE:
                  </span>
                  <p className="text-sm font-black text-white font-heading truncate">
                    {project.client}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-tech">
                    <Calendar size={13} className="text-amber-400" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {project.equipmentDetails && (
                    <p className="text-xs text-slate-300 font-mono-tech bg-slate-950/60 p-2 rounded-lg border border-slate-800 line-clamp-2">
                      {project.equipmentDetails}
                    </p>
                  )}
                </div>

                {/* Scope Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">
                    Alcance Comprendido:
                  </span>
                  <ul className="space-y-1">
                    {project.scope.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 size={12} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.scope.length > 2 && (
                    <p className="text-[10px] font-mono-tech text-amber-400 font-medium">
                      + {project.scope.length - 2} actividades técnicas documentadas
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold font-mono-tech uppercase tracking-wider transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <span>Ver Ficha Técnica</span>
                    <ExternalLink size={12} />
                  </button>
                  <button
                    onClick={() => onOpenQuote(project.title)}
                    className="py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-bold font-mono-tech uppercase tracking-wider transition-colors cursor-pointer border border-amber-500/30"
                    title="Cotizar servicio similar"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-black to-slate-900 border border-amber-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono-tech text-amber-400 uppercase tracking-wider">
              <ShieldCheck size={16} />
              <span>Garantía de Excelencia Operativa &bull; Ciclo PHVA</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
              ¿Requiere asesoría o ejecución para su subestación o infraestructura?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Nuestros especialistas dirigidos por el Ing. Richter Gómez (17 años de experiencia) evalúan su requerimiento de inmediato.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Evaluación Técnica de Subestaciones & Proyectos')}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#FFC700] to-[#D97706] text-black font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 transition-all cursor-pointer shrink-0 font-mono-tech"
          >
            SOLICITAR VISITA TÉCNICA
          </button>
        </div>

      </div>

      {/* Detail Modal for Selected Real Project */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-[#0d1424] border border-amber-500/50 rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold font-mono-tech text-amber-400 uppercase tracking-widest">
                  ITEM #{activeProjectModal.projectNumber.toString().padStart(2, '0')} &bull; PROYECTO EJECUTADO
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Cliente:</span>
                <p className="text-xs font-bold text-amber-300 mt-0.5">{activeProjectModal.client}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Fecha de Ejecución:</span>
                <p className="text-xs font-bold text-white mt-0.5">{activeProjectModal.date}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Nivel / Tensión:</span>
                <p className="text-xs font-bold text-white mt-0.5">{activeProjectModal.voltageLevel || 'AT / MT'}</p>
              </div>
            </div>

            {activeProjectModal.equipmentDetails && (
              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30">
                <span className="text-[10px] font-mono-tech text-amber-400 uppercase font-bold">Detalle del Equipo / Ubicación:</span>
                <p className="text-xs text-slate-200 font-mono-tech mt-1">{activeProjectModal.equipmentDetails}</p>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-sm font-bold font-mono-tech text-white uppercase tracking-wider">
                Alcance Técnico Comprendido:
              </h4>
              <ul className="space-y-2">
                {activeProjectModal.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold uppercase font-mono-tech cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const title = activeProjectModal.title;
                  setActiveProjectModal(null);
                  onOpenQuote(title);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-black text-xs uppercase tracking-wider font-mono-tech cursor-pointer"
              >
                Cotizar Requerimiento Similar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
