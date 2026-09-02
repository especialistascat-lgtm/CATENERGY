import React, { useState } from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { 
  Zap, 
  Wrench, 
  Cpu, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Award,
  Building2,
  Check
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';

interface HeroValuePropProps {
  onSelectArea: (areaId: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenQuote: (serviceId?: string) => void;
  onOpenDiagnostic: () => void;
  onNavigateToProjects?: () => void;
}

export const HeroValueProp: React.FC<HeroValuePropProps> = ({
  onSelectArea,
  onSelectService,
  onOpenQuote,
  onOpenDiagnostic,
  onNavigateToProjects
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = searchTerm.trim() 
    ? servicesData.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.technicalTags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  return (
    <section id="inicio" className="relative pt-28 pb-20 bg-gradient-to-b from-[#05080e] via-[#090e1a] to-[#05080e] text-white overflow-hidden">
      
      {/* Subtle Background Glows & Industrial Grid */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Background High-Voltage Switchyard Silhouette */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2400&q=90')`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Architectural Slogan / Brand Bar */}
        <div className="flex flex-col items-center justify-center text-center mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="text-[11px] sm:text-xs font-mono-tech text-amber-400 uppercase tracking-[0.25em] font-bold mb-3">
            RUC 20609382105 &bull; ESPECIALISTAS EN ALTA TENSIÓN & ENERGÍA
          </span>
          
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.14em] uppercase font-display-wide text-white leading-tight">
            AUDITORÍA. CONSULTORÍA. <span className="text-[#FFC700] drop-shadow-[0_0_20px_rgba(255,199,0,0.5)]">ALTA TENSIÓN.</span>
          </h2>
        </div>

        {/* Hero Architectural Grid Layout (Inspired directly by reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Slogan & Action Pills */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-[0.2em] font-mono-tech block mb-2">
                Ingeniería Integral &bull; Ciclo PHVA
              </span>
              <h1 
                className="text-3xl sm:text-5xl lg:text-5xl font-black uppercase font-display-wide text-white leading-tight tracking-[0.05em]"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}
              >
                DISEÑO. CONTROL. <br className="hidden sm:block" />
                <span className="text-[#FFC700]">POTENCIA PURA.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-xl">
              Socio estratégico en el sector eléctrico nacional. Brindamos consultorías en eficiencia energética, análisis de causa raíz, matrices IPERC y mantenimiento especializado de subestaciones AT/MT/BT hasta 500 kV.
            </p>

            {/* Action Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-cta-solicitar-cotizacion"
                onClick={() => onOpenQuote()}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFC700] hover:bg-[#e5b300] text-black font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-display-wide"
              >
                <span>COTIZAR PROYECTO</span>
                <ArrowRight size={15} className="stroke-[3]" />
              </button>

              {onNavigateToProjects && (
                <button
                  id="hero-cta-trabajos-realizados"
                  onClick={onNavigateToProjects}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-amber-400/60 shadow-lg transition-all cursor-pointer font-subheading uppercase"
                >
                  <Award size={15} className="text-amber-400" />
                  <span>VER CATÁLOGO</span>
                </button>
              )}

              <button
                id="hero-cta-evalua-instalacion"
                onClick={onOpenDiagnostic}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/60 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-xs border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer font-mono-tech uppercase"
              >
                <BarChart3 size={14} className="text-amber-400" />
                <span>CALCULADORA</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Metrics (Exact layout as image: | 200+, | 180+, | 90+) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Subtle intro sentence */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light border-l-2 border-amber-500/40 pl-4 italic">
              &ldquo;Servicio sin fisuras, alta precisión y máxima seguridad operativa en cada maniobra de alta tensión.&rdquo;
            </p>

            {/* Metric Bars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              
              {/* Metric 1 */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-amber-400 font-black text-2xl sm:text-3xl font-mono-tech">|</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display-wide text-white tracking-tight">
                    17+
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-subheading leading-tight pt-1">
                  AÑOS DE <br />TRAYECTORIA
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-amber-400 font-black text-2xl sm:text-3xl font-mono-tech">|</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display-wide text-white tracking-tight">
                    500<span className="text-xs text-amber-400">kV</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-subheading leading-tight pt-1">
                  CAPACIDAD EN <br />SUBESTACIONES
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-amber-400 font-black text-2xl sm:text-3xl font-mono-tech">|</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display-wide text-white tracking-tight">
                    100<span className="text-xs text-emerald-400">%</span>
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-subheading leading-tight pt-1">
                  SEGURIDAD & <br />CERO ACCIDENTES
                </div>
              </div>

            </div>

            {/* Quick Search for Services */}
            <div className="pt-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  id="service-quick-search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar servicio: SF6, Analizador Clase A, IPERC, MATPEL, Transformadores..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-black/80 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40 text-xs text-slate-100 placeholder:text-slate-500 outline-none transition-all font-mono-tech"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white px-2 py-1 rounded-full bg-slate-800 font-mono-tech"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Quick Search Results Dropdown */}
              {searchTerm && (
                <div className="mt-2 bg-[#0c1220] border border-amber-500/40 rounded-2xl shadow-2xl p-2 max-h-72 overflow-y-auto text-left z-30 relative animate-in fade-in duration-150">
                  {filteredServices.length > 0 ? (
                    filteredServices.map(service => (
                      <button
                        key={service.id}
                        onClick={() => {
                          onSelectService(service.id);
                          setSearchTerm('');
                        }}
                        className="w-full p-2.5 rounded-xl hover:bg-slate-800/90 flex items-center justify-between text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <div className="text-xs font-bold font-subheading uppercase text-white group-hover:text-amber-400 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {service.shortDescription}
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-slate-500 group-hover:text-amber-400 transition-colors ml-2 shrink-0" />
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No se encontraron servicios que coincidan con &ldquo;{searchTerm}&rdquo;. Contáctanos al {companyData.phoneFormatted}.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* The 3 Core Areas Blocks with Watermark Numerals (701 / 702 / 703 like reference image) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs text-amber-400/80 uppercase tracking-[0.2em] font-mono-tech block mb-1">
                Líneas de Especialización
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-display-wide text-white tracking-wider">
                ÁREAS <span className="text-[#FFC700]">PRINCIPALES</span>
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Ingeniería aplicada y protocolos rigurosos de mantenimiento para garantizar la continuidad del suministro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Gestión de la Energía */}
            <div 
              onClick={() => onSelectArea('gestion-energia')}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-black border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Background Ghost Watermark Numeral */}
              <div className="absolute right-3 bottom-2 text-7xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
                01
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 group-hover:scale-110 transition-transform">
                    <Zap size={22} />
                  </div>
                  <span className="text-[10px] font-bold font-mono-tech px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                    ENERGÍA &bull; CLASE A
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold font-subheading text-white group-hover:text-amber-400 transition-colors uppercase tracking-wider">
                    CONSULTORÍA EN GESTIÓN DE ENERGÍA
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">
                    Auditorías energéticas, mediciones de calidad de energía con analizadores Clase A OSINERGMIN y balances de potencia.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Calidad Redes</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ISO 50001</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Khalergy Partner</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold font-mono-tech text-amber-400 group-hover:text-amber-300 uppercase tracking-wider relative z-10">
                <span>EXPLORAR SERVICIOS</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2: Seguridad & IPERC */}
            <div 
              onClick={() => onSelectArea('gestion-mantenimiento')}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-black border border-slate-800 hover:border-emerald-500/60 shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Background Ghost Watermark Numeral */}
              <div className="absolute right-3 bottom-2 text-7xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
                02
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-[10px] font-bold font-mono-tech px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    SEGURIDAD & IPERC
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold font-subheading text-white group-hover:text-emerald-400 transition-colors uppercase tracking-wider">
                    SEGURIDAD, SALUD & MATPEL
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">
                    Matrices IPERC continuas, Mapas de Riesgo (SENAMHI), planes de contingencia nuclear (IPEN Racso) y transporte MATPEL.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">IPERC SENAMHI</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">IPEN Racso</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">MATPEL</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold font-mono-tech text-emerald-400 group-hover:text-emerald-300 uppercase tracking-wider relative z-10">
                <span>EXPLORAR SERVICIOS</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 3: Subestaciones AT/MT */}
            <div 
              onClick={() => onSelectArea('subestaciones-at-mt-bt')}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-black border border-slate-800 hover:border-sky-400/60 shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Background Ghost Watermark Numeral */}
              <div className="absolute right-3 bottom-2 text-7xl font-black font-display-wide text-watermark select-none pointer-events-none group-hover:text-watermark-gold transition-colors">
                03
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30 group-hover:scale-110 transition-transform">
                    <Cpu size={22} />
                  </div>
                  <span className="text-[10px] font-bold font-mono-tech px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider">
                    SUBESTACIONES AT/MT
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold font-subheading text-white group-hover:text-sky-300 transition-colors uppercase tracking-wider">
                    MANTENIMIENTO DE SUBESTACIONES
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">
                    Mantenimiento de patios de llaves 500kV, detección y sellado de fugas SF6 DILO, análisis DGA de transformadores y SSAA.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Chilca 500kV</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">SF6 DILO</span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">DGA Aceite</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold font-mono-tech text-sky-400 group-hover:text-sky-300 uppercase tracking-wider relative z-10">
                <span>EXPLORAR SERVICIOS</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
