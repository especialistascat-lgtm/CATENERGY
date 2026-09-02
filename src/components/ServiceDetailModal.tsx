import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { 
  X, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Layers, 
  Building2, 
  HelpCircle, 
  Target, 
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Zap,
  Clock,
  Award,
  Cpu,
  FileCheck
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappServiceMsg = `Hola CATENERGY SAC, estoy interesado en recibir información técnica y cotización para el servicio de: ${service.name}.`;
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(whatsappServiceMsg)}`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0e1422] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-200 text-slate-100">
        
        {/* Floating Close Button */}
        <button
          id="close-service-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors shadow-xl cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        {/* 1. HERO SECTION OF THE SERVICE */}
        <div className="relative min-h-[320px] sm:min-h-[380px] w-full bg-slate-900 flex flex-col justify-end p-6 sm:p-10 overflow-hidden">
          <img 
            src={service.heroImage} 
            alt={service.name} 
            className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/60 to-transparent" />
          
          <div className="relative z-10 space-y-3 max-w-3xl">
            {service.badge && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold font-mono-tech px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 backdrop-blur-md uppercase">
                <Sparkles size={12} />
                <span>{service.badge}</span>
              </span>
            )}

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              {service.name}
            </h2>

            {/* Impact Phrase */}
            <p className="text-sm sm:text-base text-amber-300 font-medium italic">
              &ldquo;{service.impactPhrase}&rdquo;
            </p>

            {/* Technical Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {service.technicalTags.map((tag, i) => (
                <span key={i} className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. BODY CONTENT */}
        <div className="p-6 sm:p-10 space-y-12">
          
          {/* DESCRIPCIÓN TÉCNICA Y DE NEGOCIO */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <HelpCircle size={16} />
              <span>Descripción Integral del Servicio</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 uppercase font-mono-tech">¿Qué es?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description.whatIs}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-emerald-400 uppercase font-mono-tech">¿Para qué sirve?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description.purpose}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-sky-400 uppercase font-mono-tech">¿Qué problema resuelve?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description.problemSolved}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-amber-300 uppercase font-mono-tech">Beneficios para el Cliente</h4>
                <ul className="space-y-1.5">
                  {service.description.clientBenefits.map((ben, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ALCANCE DEL SERVICIO */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <Layers size={16} />
              <span>Alcance y Actividades Técnicas</span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFICIOS MEDIANTE TARJETAS VISUALES */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <Award size={16} />
              <span>Beneficios Destacados</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                    <Sparkles size={18} />
                  </div>
                  <h5 className="text-sm font-bold text-white font-heading">{b.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTORES / APLICACIONES */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <Building2 size={16} />
              <span>Sectores de Aplicación</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.applications.map((app, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300 flex items-center gap-2 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </section>

          {/* METODOLOGÍA: PROCESO VISUAL EN 6 PASOS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <Target size={16} />
              <span>Metodología de Trabajo CATENERGY SAC</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.methodology.map((m) => (
                <div 
                  key={m.step} 
                  className="relative p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black font-mono-tech text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      PASO 0{m.step}
                    </span>
                    {m.step < 6 && (
                      <span className="text-xs text-slate-600 font-mono-tech">&rarr;</span>
                    )}
                  </div>
                  <h5 className="text-sm font-bold text-white">{m.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DUAL CONVERSION CTAs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">
                ¿Listo para optimizar este servicio en su empresa?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Respuesta técnica y propuesta económica personalizada en menos de 24 horas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                id="modal-cta-cotizar"
                onClick={() => {
                  onClose();
                  onOpenQuote(service.id);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer"
              >
                <span>SOLICITAR COTIZACIÓN</span>
                <ArrowRight size={16} />
              </button>

              <a
                id="modal-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all"
              >
                <PhoneCall size={16} />
                <span>CONSULTAR POR WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
