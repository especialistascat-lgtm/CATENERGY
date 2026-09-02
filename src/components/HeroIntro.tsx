import React, { useState, useEffect } from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { 
  Volume2, 
  VolumeX, 
  SkipForward, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw,
  Zap,
  Cpu,
  ShieldCheck,
  Building2,
  Award,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { soundService } from '../utils/soundService';
import { companyData } from '../data/companyData';

interface HeroIntroProps {
  onEnterApp: () => void;
  onSkipIntro: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  onEnterApp,
  onSkipIntro
}) => {
  // Current active scene: 
  // 1: Alta Tensión & Potencia Eléctrica
  // 2: Auditoría & Eficiencia Energética (Analizadores Clase A)
  // 3: Mantenimiento Especializado de Subestaciones AT/MT/BT
  // 4: Seguridad Integral, Conciencia Situacional & IPERC (Cero Accidentes)
  // 5: Proyectos Reales & Respaldo Institucional (IPEN, SENAMHI, EGEJUNIN, ISA REP)
  // 6: Presentación Oficial CAT ENERGY S.A.C.
  const [scene, setScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasVoiceSpoken, setHasVoiceSpoken] = useState<boolean>(false);

  // Scene timing controller
  useEffect(() => {
    if (!isPlaying) return;

    let timer: NodeJS.Timeout;
    if (scene === 1) {
      timer = setTimeout(() => setScene(2), 4200);
    } else if (scene === 2) {
      timer = setTimeout(() => {
        soundService.playSubstationHum(2500);
        setScene(3);
      }, 4200);
    } else if (scene === 3) {
      timer = setTimeout(() => setScene(4), 4200);
    } else if (scene === 4) {
      timer = setTimeout(() => setScene(5), 4200);
    } else if (scene === 5) {
      timer = setTimeout(() => setScene(6), 4200);
    } else if (scene === 6) {
      if (!hasVoiceSpoken) {
        soundService.speakBrandName();
        setHasVoiceSpoken(true);
      }
    }

    return () => clearTimeout(timer);
  }, [scene, isPlaying, hasVoiceSpoken]);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundService.setMuted(nextMuted);
  };

  const jumpToScene = (targetScene: number) => {
    setScene(targetScene);
    if (targetScene === 3) {
      soundService.playSubstationHum(2000);
    }
    if (targetScene === 6) {
      soundService.speakBrandName();
      setHasVoiceSpoken(true);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[660px] max-h-[1080px] bg-[#05080e] text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* Top Hazard Warning Industrial Stripe (From PDF branding) */}
      <div className="absolute top-0 left-0 right-0 h-2 z-30 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_14px,#000000_14px,#000000_28px)] shadow-md" />

      {/* Dynamic Ultra-Realistic Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        
        {/* SCENE 1: ALTA TENSIÓN & POTENCIA (500kV / 220kV Switchyard & Transmission Lines) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 1 
              ? 'opacity-100 scale-105' 
              : scene > 1 
                ? 'opacity-0 scale-125 pointer-events-none' 
                : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-[#05080e]/75 to-[#05080e]/40" />
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent" />
        </div>

        {/* SCENE 2: AUDITORÍA & EFICIENCIA ENERGÉTICA (Power Quality Analysis & Meters) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 2 
              ? 'opacity-100 scale-105' 
              : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-[#05080e]/80 to-[#05080e]/40" />
        </div>

        {/* SCENE 3: SUBESTACIÓN (Transformers, SF6, Patios de Llaves) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 3 
              ? 'opacity-100 scale-105' 
              : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-amber-950/40 to-[#05080e]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-transparent to-[#05080e]/60" />
        </div>

        {/* SCENE 4: SEGURIDAD & IPERC (EPP, Maniobras, Conciencia Situacional) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 4 
              ? 'opacity-100 scale-105' 
              : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-slate-950/80 to-[#05080e]/50" />
        </div>

        {/* SCENE 5: PROYECTOS & CONFIANZA PROBADA (Centrales, Nuclear, Agroindustria) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 5 
              ? 'opacity-100 scale-105' 
              : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-[#05080e]/85 to-[#05080e]/50" />
        </div>

        {/* SCENE 6: MARCA CAT ENERGY S.A.C. */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 transform ${
            scene === 6 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2400&q=90')`
            }}
          />
          <div className="absolute inset-0 bg-[#05080e]/90 backdrop-blur-md" />
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-transparent to-transparent" />
        </div>

        {/* Technical Substation Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Top Controls Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        
        {/* Brand Chip with Transmission Tower */}
        <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-black/85 border border-amber-500/40 backdrop-blur-md shadow-xl">
          <CatEnergyLogo size={22} variant="icon-only" />
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-wider text-white font-heading uppercase">
              CAT <span className="text-[#F59E0B]">ENERGY</span> S.A.C.
            </span>
            <span className="text-[8px] font-mono-tech text-amber-300 font-semibold tracking-widest uppercase">
              RUC: 20609382105 &bull; ICA, PERÚ
            </span>
          </div>
        </div>

        {/* Audio & Control Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="intro-sound-toggle"
            onClick={toggleSound}
            className="p-2.5 rounded-xl bg-black/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-500/40 transition-colors backdrop-blur-md cursor-pointer shadow-lg"
            title={isMuted ? 'Activar Sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-amber-400" />}
          </button>

          <button
            id="intro-play-pause"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-xl bg-black/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 hover:border-amber-500/40 transition-colors backdrop-blur-md cursor-pointer shadow-lg"
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          {/* OMITIR INTRO (Accesible, immediate transition) */}
          <button
            id="intro-skip-btn"
            onClick={onSkipIntro}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-black/80 hover:from-amber-500/30 hover:to-slate-900 text-xs sm:text-sm font-black tracking-wider text-amber-300 hover:text-white border border-amber-500/50 hover:border-amber-400 transition-all backdrop-blur-md cursor-pointer shadow-xl uppercase font-mono-tech"
          >
            <span>INGRESAR DIRECTO</span>
            <SkipForward size={16} className="text-amber-400" />
          </button>
        </div>
      </div>

      {/* Main Center Stage with 3D WIDE TYPOGRAPHY */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 py-4 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* SCENE 1: ALTA TENSIÓN & POTENCIA */}
        {scene === 1 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-300 text-xs font-black tracking-widest uppercase font-mono-tech shadow-lg shadow-amber-500/10">
              <Zap size={14} className="text-amber-400 animate-pulse" />
              <span>01 &bull; ALTA TENSIÓN &bull; 500kV &bull; 220kV &bull; 60kV</span>
            </div>

            {/* 3D WIDE HEADING */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase font-heading text-white leading-none transform scale-y-105"
              style={{
                textShadow: '0 1px 0 #b45309, 0 2px 0 #92400e, 0 3px 0 #78350f, 0 4px 0 #451a03, 0 6px 1px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.95)'
              }}
            >
              POTENCIA &bull; <span className="text-[#F59E0B] drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">CONFIABILIDAD</span>
            </h1>

            <p className="text-base sm:text-2xl text-amber-100/90 max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
              Especialistas en ingeniería de subestaciones, líneas de transmisión y activos de alta criticidad en generación, transmisión e industria.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 text-xs font-mono-tech text-amber-300 font-bold uppercase tracking-wider">
                Patio de Llaves 500 kV
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 text-xs font-mono-tech text-amber-300 font-bold uppercase tracking-wider">
                Transformadores de Potencia
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 text-xs font-mono-tech text-amber-300 font-bold uppercase tracking-wider">
                Ciclo PHVA
              </span>
            </div>
          </div>
        )}

        {/* SCENE 2: AUDITORÍA & EFICIENCIA ENERGÉTICA */}
        {scene === 2 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/60 text-emerald-300 text-xs font-black tracking-widest uppercase font-mono-tech shadow-lg shadow-emerald-500/10">
              <Cpu size={14} className="text-emerald-400" />
              <span>02 &bull; AUDITORÍA & EFICIENCIA ENERGÉTICA</span>
            </div>

            {/* 3D WIDE HEADING */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase font-heading text-white leading-none transform scale-y-105"
              style={{
                textShadow: '0 1px 0 #047857, 0 2px 0 #065f46, 0 3px 0 #064e3b, 0 4px 0 #022c22, 0 6px 1px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.95)'
              }}
            >
              GESTIÓN <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">INTELIGENTE</span>
            </h1>

            <p className="text-base sm:text-2xl text-slate-200 max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
              Mediciones de calidad de energía con analizadores de Clase A homologados por OSINERGMIN y planes periciales de acción.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-emerald-500/40 text-xs font-mono-tech text-emerald-300 font-bold uppercase tracking-wider">
                Partner: KHALERGY
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-emerald-500/40 text-xs font-mono-tech text-emerald-300 font-bold uppercase tracking-wider">
                Armónicos & Transitorios
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-emerald-500/40 text-xs font-mono-tech text-emerald-300 font-bold uppercase tracking-wider">
                Auditorías Agroindustriales
              </span>
            </div>
          </div>
        )}

        {/* SCENE 3: SUBESTACIONES & MANTENIMIENTO */}
        {scene === 3 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-300 text-xs font-black tracking-widest uppercase font-mono-tech shadow-lg">
              <Zap size={14} className="text-amber-400" />
              <span>03 &bull; MANTENIMIENTO ESPECIALIZADO AT / MT / BT</span>
            </div>

            {/* 3D WIDE HEADING */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase font-heading text-white leading-none transform scale-y-105"
              style={{
                textShadow: '0 1px 0 #b45309, 0 2px 0 #92400e, 0 3px 0 #78350f, 0 4px 0 #451a03, 0 6px 1px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.95)'
              }}
            >
              SUBESTACIONES &bull; <span className="text-[#F59E0B]">PATIO DE LLAVES</span>
            </h1>

            <p className="text-base sm:text-2xl text-slate-200 max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
              Detección de fugas SF6 con detector DILO, análisis DGA de aceite, pruebas eléctricas, relés de protección y pozos a tierra.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="px-3 py-1 rounded bg-black/80 border border-slate-700 text-xs font-mono-tech text-slate-300 font-bold">Interruptores 500kV</span>
              <span className="px-3 py-1 rounded bg-black/80 border border-slate-700 text-xs font-mono-tech text-slate-300 font-bold">Seccionadores & CVT</span>
              <span className="px-3 py-1 rounded bg-black/80 border border-slate-700 text-xs font-mono-tech text-slate-300 font-bold">Celdas 6kV - 36kV</span>
              <span className="px-3 py-1 rounded bg-black/80 border border-slate-700 text-xs font-mono-tech text-slate-300 font-bold">Bancos de Batería 300Ah</span>
            </div>
          </div>
        )}

        {/* SCENE 4: SEGURIDAD & IPERC */}
        {scene === 4 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/60 text-yellow-300 text-xs font-black tracking-widest uppercase font-mono-tech shadow-lg">
              <ShieldCheck size={14} className="text-yellow-400" />
              <span>04 &bull; SEGURIDAD INTEGRAL & GESTIÓN IPERC</span>
            </div>

            {/* 3D WIDE HEADING */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase font-heading text-white leading-none transform scale-y-105"
              style={{
                textShadow: '0 1px 0 #b45309, 0 2px 0 #92400e, 0 3px 0 #78350f, 0 4px 0 #451a03, 0 6px 1px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.95)'
              }}
            >
              CERO ACCIDENTES &bull; <span className="text-[#F59E0B]">NUESTRA META</span>
            </h1>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/80 border border-amber-500/40 max-w-2xl mx-auto backdrop-blur-md">
              <p className="text-sm sm:text-lg text-amber-300 font-black tracking-wide uppercase font-heading">
                "{companyData.safetyMotto}"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {companyData.safetyCommitment}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-xs font-mono-tech text-slate-300">
              <span className="px-3 py-1 rounded bg-black/80 border border-amber-500/30">Conciencia Situacional 360°</span>
              <span className="px-3 py-1 rounded bg-black/80 border border-amber-500/30">Trabajos en Altura & Líneas de Vida</span>
              <span className="px-3 py-1 rounded bg-black/80 border border-amber-500/30">Planes de Contingencia MATPEL</span>
            </div>
          </div>
        )}

        {/* SCENE 5: RESPALDO INSTITUCIONAL & CLIENTES */}
        {scene === 5 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/60 text-sky-300 text-xs font-black tracking-widest uppercase font-mono-tech shadow-lg">
              <Award size={14} className="text-sky-400" />
              <span>05 &bull; 17 AÑOS DE EXPERIENCIA EN EL SECTOR</span>
            </div>

            {/* 3D WIDE HEADING */}
            <h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider uppercase font-heading text-white leading-none transform scale-y-105"
              style={{
                textShadow: '0 1px 0 #0369a1, 0 2px 0 #075985, 0 3px 0 #0c4a6e, 0 4px 0 #082f49, 0 6px 1px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.95)'
              }}
            >
              PROYECTOS <span className="text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">DE ALTO IMPACTO</span>
            </h1>

            <p className="text-sm sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium">
              Liderados por el <strong className="text-white">Ing. Richter Gómez</strong> (ex-ISA REP y SENATI), con obras ejecutadas para líderes del sector nacional:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-3xl text-left">
              <div className="p-3 rounded-xl bg-black/80 border border-slate-700">
                <span className="text-[10px] font-mono-tech text-amber-400 font-bold block">IPEN</span>
                <span className="text-xs text-slate-200 font-semibold">Centro Nuclear Racso & MATPEL</span>
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-slate-700">
                <span className="text-[10px] font-mono-tech text-amber-400 font-bold block">SENAMHI</span>
                <span className="text-xs text-slate-200 font-semibold">14 Sedes a Nivel Nacional</span>
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-slate-700">
                <span className="text-[10px] font-mono-tech text-amber-400 font-bold block">EGEJUNIN</span>
                <span className="text-xs text-slate-200 font-semibold">CH Huasahuasi 1 y 2</span>
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-slate-700">
                <span className="text-[10px] font-mono-tech text-amber-400 font-bold block">ATLANTICA</span>
                <span className="text-xs text-slate-200 font-semibold">S.E. Chilca 500kV & Conococha</span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 6: OFICIAL CAT ENERGY S.A.C. */}
        {scene === 6 && (
          <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
            
            {/* Real Official CAT ENERGY Logo Emblem Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 rounded-3xl opacity-40 group-hover:opacity-80 blur-2xl transition duration-500" />
              <div className="relative p-6 sm:p-8 rounded-3xl bg-black/95 border-2 border-amber-500 shadow-2xl flex flex-col items-center justify-center">
                <CatEnergyLogo 
                  size="hero" 
                  variant="horizontal" 
                  theme="gold" 
                  showSubtitle={true}
                  subtitleText="AUDITORIA, CONSULTORIA Y SERVICIOS EN ENERGIA"
                  animated={true}
                />
              </div>
            </div>

            {/* Official Legal Entity Details */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/50">
                <span className="text-xs sm:text-sm text-amber-300 font-mono-tech font-bold uppercase tracking-widest">
                  RUC 20609382105 &bull; CONSULTORÍAS EN ALTA TENSIÓN Y ENERGÍA S.A.C.
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-mono-tech">
                Socio estratégico para la excelencia en el sector eléctrico nacional
              </p>
            </div>

            {/* BOTÓN DE INGRESO PRINCIPAL CON EFECTO 3D */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <button
                id="enter-catenergy-btn"
                onClick={onEnterApp}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#FFC700] to-[#D97706] hover:from-[#e59408] hover:to-[#b45309] text-black font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transform hover:-translate-y-1 active:translate-y-0.5 transition-all cursor-pointer border-b-4 border-amber-800"
              >
                <span>INGRESAR A CATENERGY</span>
                <ArrowRight size={22} className="text-black stroke-[3]" />
              </button>
            </div>

            {/* Quick Scene Selectors */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                onClick={() => jumpToScene(1)}
                className="text-xs font-mono-tech text-slate-400 hover:text-amber-400 underline cursor-pointer"
              >
                Ver Presentación desde el inicio
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Bottom Timeline Scene Switcher & Direct Entry Link */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Step Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {[
            { id: 1, label: '01. Potencia' },
            { id: 2, label: '02. Eficiencia' },
            { id: 3, label: '03. Subestaciones' },
            { id: 4, label: '04. Seguridad' },
            { id: 5, label: '05. Experiencia' },
            { id: 6, label: '06. CAT ENERGY' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => jumpToScene(s.id)}
              className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono-tech font-bold uppercase transition-all cursor-pointer ${
                scene === s.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-black/60 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Enter Portal Bottom Link */}
        <button
          id="intro-enter-bottom-link"
          onClick={onEnterApp}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold font-mono-tech text-amber-400 hover:text-white uppercase tracking-wider cursor-pointer group"
        >
          <span>Acceder al Portal Completo</span>
          <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Hazard Warning Industrial Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 z-30 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_14px,#000000_14px,#000000_28px)] shadow-md" />

    </section>
  );
};
