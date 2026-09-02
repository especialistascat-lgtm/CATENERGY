import React from 'react';
import { ServiceItem } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Sparkles,
  BarChart3,
  Layers,
  Award
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onViewService: (service: ServiceItem) => void;
  onQuickQuote: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onViewService,
  onQuickQuote
}) => {
  const getAreaColor = () => {
    switch (service.areaId) {
      case 'gestion-energia':
        return {
          border: 'hover:border-amber-500/60',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          btn: 'text-amber-400 hover:text-amber-300',
          tag: 'bg-amber-500/5 text-amber-300/80 border-amber-500/20'
        };
      case 'gestion-mantenimiento':
        return {
          border: 'hover:border-emerald-500/60',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          btn: 'text-emerald-400 hover:text-emerald-300',
          tag: 'bg-emerald-500/5 text-emerald-300/80 border-emerald-500/20'
        };
      case 'subestaciones-at-mt-bt':
        return {
          border: 'hover:border-amber-400/60',
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          btn: 'text-amber-300 hover:text-amber-200',
          tag: 'bg-amber-500/5 text-amber-200/80 border-amber-500/20'
        };
    }
  };

  const colors = getAreaColor();

  return (
    <div 
      id={`service-card-${service.slug}`}
      className={`group relative rounded-2xl bg-[#0f1522]/90 hover:bg-[#131b2c] border border-slate-800 ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1.5`}
    >
      {/* Top Image Preview with Gradient Overlay */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
        <img 
          src={service.heroImage} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85 group-hover:brightness-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522] via-[#0f1522]/40 to-transparent" />
        
        {/* Badge Tag */}
        {service.badge && (
          <div className="absolute top-3 left-3">
            <span className={`text-[11px] font-bold font-mono-tech px-2.5 py-1 rounded-full border backdrop-blur-md ${colors.badge}`}>
              {service.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h4 className="text-base sm:text-lg font-bold font-subheading text-white group-hover:text-amber-400 transition-colors leading-snug tracking-wide uppercase">
            {service.name}
          </h4>

          {/* Impact quote */}
          <p className="text-xs italic text-amber-400/90 font-medium">
            &ldquo;{service.impactPhrase}&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed font-light">
            {service.shortDescription}
          </p>
        </div>

        {/* Technical Tags */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {service.technicalTags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[10px] font-mono-tech px-2 py-0.5 rounded border ${colors.tag}`}
            >
              {tag}
            </span>
          ))}
          {service.technicalTags.length > 3 && (
            <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
              +{service.technicalTags.length - 3}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
          <button
            id={`btn-ver-servicio-${service.slug}`}
            onClick={() => onViewService(service)}
            className={`flex items-center gap-1.5 text-xs font-bold font-mono-tech ${colors.btn} cursor-pointer group-hover:underline transition-all uppercase tracking-wider`}
          >
            <span>VER DETALLES</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id={`btn-cotizar-rapido-${service.slug}`}
            onClick={() => onQuickQuote(service)}
            className="px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-amber-500/20 text-slate-200 hover:text-amber-400 border border-slate-700 hover:border-amber-500/40 text-[11px] font-semibold transition-colors cursor-pointer font-subheading uppercase tracking-wider"
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
};
