import React, { useState } from 'react';
import { PhoneCall, MessageCircle, X, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

interface WhatsAppFloatingButtonProps {
  currentContextService?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  currentContextService
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const messageText = currentContextService
    ? `Hola CATENERGY SAC, estoy interesado en recibir asesoría técnica y cotización para el servicio de: ${currentContextService}.`
    : `Hola CATENERGY, estoy interesado en recibir información sobre sus servicios de gestión de energía y subestaciones.`;

  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group select-none">
      
      {/* Speech Bubble / Tooltip Banner */}
      {isTooltipOpen && (
        <div className="relative max-w-xs p-3 rounded-2xl bg-[#0f172a] border border-emerald-500/40 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsTooltipOpen(false);
            }}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-xs border border-slate-700 cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X size={12} />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-bold font-mono-tech text-emerald-400 uppercase">
              Asesoría Técnica en Línea
            </span>
          </div>

          <p className="text-xs text-slate-200 font-medium leading-snug">
            ¿Necesitas asesoría? Escríbenos directamente por WhatsApp.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-500/50 transform hover:scale-105 active:scale-95 transition-all cursor-pointer border border-emerald-400/40"
      >
        <div className="relative">
          <MessageCircle size={22} className="fill-white/20" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-600" />
        </div>
        <span className="font-semibold tracking-tight text-xs sm:text-sm">
          ¿Necesitas asesoría? Escríbenos
        </span>
      </a>

    </div>
  );
};
