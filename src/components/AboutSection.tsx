import React from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  PhoneCall,
  Mail,
  Building,
  Sparkles,
  Award,
  Users,
  Briefcase,
  Target,
  Eye,
  Check,
  Compass,
  FileCheck
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="nosotros" className="py-20 bg-[#080d1a] text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Safety Hazard Stripes Accent Line */}
      <div className="w-full h-1.5 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_10px,#000000_10px,#000000_20px)] mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header with 3D WIDE Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-[0.2em] font-mono-tech">
            <Building size={13} />
            <span>NUESTRA ESENCIA &bull; CAT ENERGY S.A.C.</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.1em] uppercase font-display-wide text-white">
            SOBRE <span className="text-[#FFC700]">NOSOTROS</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            En <strong className="text-white font-semibold">CATENERGYSAC</strong>, somos su socio estratégico para la excelencia en el sector eléctrico. Brindamos soluciones integrales de consultoría en eficiencia energética y mantenimiento de subestaciones, desde baja y media tensión hasta alta potencia.
          </p>
        </div>

        {/* 3 Core Pillars with Watermark indices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl hover:border-amber-500/40 transition-colors relative overflow-hidden group">
            <div className="absolute right-3 bottom-2 text-6xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
              01
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/30 relative z-10">
              <Zap size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-subheading text-white uppercase tracking-wider relative z-10">Cobertura Integral</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light relative z-10">
              Cubrimos todo el espectro eléctrico: desde instalaciones de baja y media tensión hasta proyectos de alta potencia en generación, transmisión, distribución e industria.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl hover:border-emerald-500/40 transition-colors relative overflow-hidden group">
            <div className="absolute right-3 bottom-2 text-6xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
              02
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30 relative z-10">
              <Compass size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-subheading text-white uppercase tracking-wider relative z-10">Filosofía PHVA</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light relative z-10">
              Trabajamos bajo el ciclo de mejora continua: <strong className="text-emerald-300">Planificar, Hacer, Verificar y Actuar</strong>, garantizando que cada servicio cumpla con los más altos estándares.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl hover:border-sky-500/40 transition-colors relative overflow-hidden group">
            <div className="absolute right-3 bottom-2 text-6xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
              03
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/30 relative z-10">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold font-subheading text-white uppercase tracking-wider relative z-10">Soluciones Técnicas</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light relative z-10">
              Análisis de causa raíz (ACR), planes de contingencia robustos, matrices IPERC y estrategias de eficiencia que aseguran un futuro energético confiable.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-black border border-amber-500/40 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <Target size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech text-amber-400 uppercase font-bold tracking-widest block">PROPÓSITO OFICIAL</span>
                <h3 className="text-xl sm:text-2xl font-black font-display-wide text-white uppercase tracking-wider">MISIÓN</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              "{companyData.about.mission}"
            </p>
          </div>

          {/* Visión */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-slate-900 to-black border border-yellow-500/40 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
                <Eye size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech text-yellow-400 uppercase font-bold tracking-widest block">HORIZONTE ESTRATÉGICO</span>
                <h3 className="text-xl sm:text-2xl font-black font-display-wide text-white uppercase tracking-wider">VISIÓN</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              "{companyData.about.vision}"
            </p>
          </div>

        </div>

        {/* 5 Valores Corporativos Oficiales */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold font-mono-tech uppercase tracking-wider">
              <span>02 &bull; PRINCIPIOS ÉTICOS & CONDUCTA</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-display-wide text-white uppercase tracking-wider">
              NUESTROS 5 VALORES FUNDAMENTALES
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Los pilares inquebrantables que rigen cada inspección técnica y maniobra en subestaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {companyData.about.values.map((val) => (
              <div 
                key={val.number}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all space-y-2.5 group"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black font-mono-tech border border-amber-500/30 group-hover:bg-amber-500/20">
                  {val.number}
                </div>
                <h4 className="text-base font-black font-heading text-white group-hover:text-amber-300 transition-colors uppercase">
                  {val.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Liderazgo y Perfil Técnico: ING. RICHTER GÓMEZ (Slides 42 & 43) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-black border-2 border-amber-500/40 shadow-2xl space-y-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Photo / Avatar Card */}
            <div className="shrink-0 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-300" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85" 
                  alt="Ing. Richter Gómez" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 text-center">
                  <span className="text-[10px] font-mono-tech text-amber-400 font-bold uppercase tracking-wider block">
                    GERENTE DE PROYECTOS
                  </span>
                </div>
              </div>
            </div>

            {/* Leader Bio */}
            <div className="space-y-4 text-center lg:text-left flex-1">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono-tech font-bold uppercase">
                  <Award size={13} />
                  <span>17 Años de Destacada Trayectoria</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
                  {companyData.about.leader.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono-tech text-amber-300 font-bold">
                  {companyData.about.leader.title} &bull; {companyData.about.leader.profession}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {companyData.about.leader.description}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Experiencia en líderes:</span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-slate-700 text-xs font-mono-tech text-amber-300 font-semibold">
                  Red de Energía del Perú (ISA REP)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-slate-700 text-xs font-mono-tech text-amber-300 font-semibold">
                  SENATI
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 border border-slate-700 text-xs font-mono-tech text-amber-300 font-semibold">
                  Centrales & Subestaciones 500kV
                </span>
              </div>
            </div>
          </div>

          {/* Organigrama / Equipo de Colaboradores (Slide 43) */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="text-center sm:text-left flex items-center gap-2 text-xs font-bold font-mono-tech text-amber-400 uppercase tracking-wider">
              <Users size={16} />
              <span>Estructura Técnica & Equipo de Colaboradores (Slide 43)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {companyData.about.team.slice(1).map((member, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-black/70 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-1"
                >
                  <span className="text-[10px] font-mono-tech text-amber-400 uppercase block font-semibold">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-200 font-medium font-mono-tech">
                    {member.credentials}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Ficha Oficial de Datos de la Empresa (Slides 44 & 45) */}
        <div className="p-8 rounded-3xl bg-black/90 border border-amber-500/30 space-y-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-4">
              <CatEnergyLogo size="md" variant="horizontal" theme="gold" showSubtitle={true} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold font-mono-tech">
                RUC: {companyData.ruc}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold font-mono-tech">
                ESTADO: {companyData.taxpayerStatus}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold font-mono-tech">
                CONDICIÓN: {companyData.taxpayerCondition}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Número de RUC:</span>
              <p className="text-sm font-black text-amber-400 font-mono-tech mt-1">{companyData.ruc}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Razón Social:</span>
              <p className="text-xs font-bold text-white font-mono-tech mt-1">{companyData.legalName}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Nombre Comercial:</span>
              <p className="text-sm font-black text-white font-mono-tech mt-1">{companyData.name}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Tipo Contribuyente:</span>
              <p className="text-xs font-bold text-white font-mono-tech mt-1">{companyData.taxpayerType}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 lg:col-span-2">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Domicilio Fiscal:</span>
              <p className="text-xs font-bold text-slate-200 font-mono-tech mt-1">{companyData.fiscalAddress}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Inicio de Actividades:</span>
              <p className="text-xs font-bold text-slate-200 font-mono-tech mt-1">{companyData.activitiesStartDate}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase font-semibold">Partner Tecnológico:</span>
              <p className="text-xs font-bold text-amber-300 font-mono-tech mt-1">{companyData.strategicPartner.name}</p>
            </div>
          </div>
        </div>

        {/* CTA Banner inside About */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-black border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-heading text-white">
              ¿Desea coordinar una visita técnica a sus subestaciones o plantas?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              El equipo de CAT ENERGY S.A.C. está disponible para evaluar su requerimiento en todo el Perú.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-extrabold text-xs sm:text-sm tracking-wide uppercase font-mono-tech shadow-lg cursor-pointer"
            >
              SOLICITAR COTIZACIÓN
            </button>
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent('Hola CATENERGY, deseo coordinar una evaluación técnica.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide uppercase font-mono-tech shadow-lg flex items-center gap-2"
            >
              <PhoneCall size={14} />
              <span>WHATSAPP DIRECTO</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
