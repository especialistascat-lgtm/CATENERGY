import React from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { companyData } from '../data/companyData';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ExternalLink,
  Instagram,
  Facebook,
  Award,
  FileText
} from 'lucide-react';

interface FooterProps {
  onSelectArea: (areaId: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectArea,
  onSelectService,
  onOpenQuote
}) => {
  return (
    <footer className="bg-[#03060b] text-slate-400 border-t border-amber-500/30 relative z-10">
      
      {/* Top Safety Hazard Stripes */}
      <div className="w-full h-1.5 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_10px,#000000_10px,#000000_20px)]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <CatEnergyLogo size="md" variant="horizontal" theme="gold" showSubtitle={true} />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-light">
              {companyData.about.whoWeAre}
            </p>

            <div className="p-4 rounded-2xl bg-black/80 border border-amber-500/30 text-xs text-amber-300 space-y-1">
              <span className="font-bold font-mono-tech uppercase block text-[10px] text-amber-400">
                Compromiso de Seguridad:
              </span>
              <p className="italic font-light">
                "{companyData.safetyMotto}"
              </p>
            </div>

            {/* Social Media & Linktree */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a 
                href={companyData.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs font-mono-tech transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
                <span>{companyData.instagramHandle}</span>
              </a>

              <a 
                href={companyData.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs font-mono-tech transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
                <span>Facebook</span>
              </a>

              <a 
                href={companyData.linktreeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/40 text-xs font-mono-tech transition-colors"
                aria-label="Linktree"
              >
                <ExternalLink size={14} />
                <span>bit.ly/CATENERGYPERU</span>
              </a>
            </div>
          </div>

          {/* Column 2: Las 3 Grandes Áreas (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider">
              Áreas de Especialización
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectArea('gestion-energia')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-2 text-left text-slate-300 cursor-pointer"
                >
                  <Zap size={14} className="text-amber-400 shrink-0" />
                  <span>01. Consultoría en Gestión de Energía</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectArea('gestion-mantenimiento')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-left text-slate-300 cursor-pointer"
                >
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span>02. Seguridad, IPERC & Contingencia</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectArea('subestaciones-at-mt-bt')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-2 text-left text-slate-300 cursor-pointer"
                >
                  <Cpu size={14} className="text-sky-400 shrink-0" />
                  <span>03. Mantenimiento de Subestaciones AT/MT</span>
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider pt-3">
              Servicios & Casos Clave
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>&bull; Reparación de Fugas SF6 (500kV Chilca)</li>
              <li>&bull; Medición Calidad de Redes Clase A (OSINERGMIN)</li>
              <li>&bull; Mantenimiento de Celdas 6kV - 36kV (Huasahuasi)</li>
              <li>&bull; Planes de Contingencia MATPEL & IPEN Racso</li>
              <li>&bull; Matrices IPERC 14 Sedes SENAMHI</li>
            </ul>
          </div>

          {/* Column 3: Contact Channels & Fiscal Registry (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider">
              Datos Fiscales & Contacto
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <PhoneCall size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono-tech">Teléfono / WhatsApp:</div>
                  <a 
                    href={`https://wa.me/${companyData.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-bold transition-colors font-mono-tech"
                  >
                    {companyData.phoneFormatted}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono-tech">Correo Electrónico:</div>
                  <a 
                    href={`mailto:${companyData.email}`}
                    className="text-white hover:text-sky-400 font-bold transition-colors break-all font-mono-tech"
                  >
                    {companyData.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono-tech">Domicilio Fiscal:</div>
                  <div className="text-slate-300 font-mono-tech text-xs">
                    {companyData.fiscalAddress}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <FileText size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-mono-tech">RUC Oficial:</div>
                  <div className="text-amber-400 font-bold font-mono-tech text-xs">
                    {companyData.ruc} &bull; {companyData.taxpayerStatus} ({companyData.taxpayerCondition})
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action Box (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono-tech uppercase font-bold text-amber-400 tracking-wider">
              Atención Inmediata
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              ¿Requiere soporte o atención en subestaciones o paradas de planta?
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer font-mono-tech"
            >
              COTIZAR ONLINE
            </button>
            <a
              href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent('Hola CATENERGY, requiero atención técnica especializada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors font-mono-tech"
            >
              <PhoneCall size={13} />
              <span>WhatsApp Directo</span>
            </a>
          </div>

        </div>

        {/* Bottom Rights & Legal Compliance Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left font-mono-tech text-[11px]">
            <span>{companyData.footerQuote}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono-tech text-slate-400">
            <span>Razón Social: {companyData.legalName}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
