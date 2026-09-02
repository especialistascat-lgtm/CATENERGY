import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  Zap, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  TrendingDown,
  Sparkles,
  Calculator,
  RefreshCw
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface EnergyEfficiencyDiagnosticProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (serviceId: string) => void;
}

export const EnergyEfficiencyDiagnostic: React.FC<EnergyEfficiencyDiagnosticProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const [step, setStep] = useState(1);
  const [facilityType, setFacilityType] = useState('industrial');
  const [monthlyBill, setMonthlyBill] = useState(25000); // USD or PEN
  const [hasSubstation, setHasSubstation] = useState(true);
  const [lastMaintenanceMonths, setLastMaintenanceMonths] = useState(14);
  const [hasPowerFactorPenalty, setHasPowerFactorPenalty] = useState(true);

  if (!isOpen) return null;

  // Calculators
  const estimatedAnnualEnergyCost = monthlyBill * 12;
  const estimatedSavingsPotential = Math.round(estimatedAnnualEnergyCost * 0.18); // ~18% typical savings
  const riskIndex = lastMaintenanceMonths > 12 ? 'ALTO' : lastMaintenanceMonths > 6 ? 'MEDIO' : 'BAJO';

  const resetCalculator = () => {
    setStep(1);
    setMonthlyBill(25000);
    setLastMaintenanceMonths(14);
    setHasPowerFactorPenalty(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#0e1422] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase tracking-wider mb-2">
          <Calculator size={16} />
          <span>Simulador Técnico de Diagnóstico</span>
        </div>

        <h3 className="text-2xl font-black font-heading text-white mb-2">
          Evalúa el Potencial de Ahorro y Confiabilidad
        </h3>
        <p className="text-xs text-slate-300 mb-6">
          Estime el impacto económico de auditorías energéticas y mantenimiento especializado en su instalación.
        </p>

        {step === 1 ? (
          <div className="space-y-5">
            {/* Facility Type */}
            <div>
              <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-2">
                1. Tipo de Instalación
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'industrial', label: 'Planta Industrial' },
                  { id: 'mining', label: 'Minería / Pesada' },
                  { id: 'commercial', label: 'Comercial / Retail' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFacilityType(item.id)}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      facilityType === item.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly bill range */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-mono-tech text-slate-300 font-semibold">
                  2. Facturación Eléctrica Mensual Promedio (S/ o USD):
                </label>
                <span className="text-sm font-bold font-mono-tech text-amber-400">
                  {monthlyBill.toLocaleString('es-PE')}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono-tech mt-1">
                <span>5,000</span>
                <span>125,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Substation & Last Maintenance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1.5">
                  3. ¿Cuenta con Subestación Propia?
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setHasSubstation(true)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border ${
                      hasSubstation ? 'bg-amber-500/20 text-amber-300 border-amber-500' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasSubstation(false)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border ${
                      !hasSubstation ? 'bg-amber-500/20 text-amber-300 border-amber-500' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1.5">
                  4. Meses desde último mantenimiento:
                </label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={lastMaintenanceMonths}
                  onChange={(e) => setLastMaintenanceMonths(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-mono-tech"
                />
              </div>
            </div>

            {/* Penalties */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <input
                id="penalty-check"
                type="checkbox"
                checked={hasPowerFactorPenalty}
                onChange={(e) => setHasPowerFactorPenalty(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 bg-slate-950"
              />
              <label htmlFor="penalty-check" className="text-xs text-slate-300 cursor-pointer">
                Presenta cobros por energía reactiva (Factor de Potencia &lt; 0.96) o caídas de tensión
              </label>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-extrabold text-sm tracking-wide shadow-lg cursor-pointer"
            >
              CALCULAR DIAGNÓSTICO PRELIMINAR
            </button>
          </div>
        ) : (
          /* Results Step 2 */
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Estimated Savings Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-1">
                <span className="text-[10px] font-mono-tech text-emerald-400 uppercase font-bold">
                  Ahorro Potencial Estimado (Anual)
                </span>
                <div className="text-2xl font-black font-mono-tech text-emerald-400">
                  ~ {estimatedSavingsPotential.toLocaleString('es-PE')} / año
                </div>
                <p className="text-[11px] text-slate-400">
                  Basado en auditoría AEE e ISO 50001
                </p>
              </div>

              {/* Risk Factor Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-1">
                <span className="text-[10px] font-mono-tech text-amber-400 uppercase font-bold">
                  Índice de Riesgo de Subestación
                </span>
                <div className={`text-2xl font-black font-mono-tech ${
                  riskIndex === 'ALTO' ? 'text-red-400' : riskIndex === 'MEDIO' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {riskIndex} ({lastMaintenanceMonths} meses)
                </div>
                <p className="text-[11px] text-slate-400">
                  Se recomienda análisis DGA de aceite urgente
                </p>
              </div>

            </div>

            {/* Recommended Action Plan */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold font-mono-tech text-amber-400 uppercase">
                Servicios Recomendados para su Perfil:
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>AEE - Auditoría Energética y Eficiencia (Retorno &lt; 8 meses)</span>
                </li>
                {hasSubstation && (
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Análisis Fisicoquímico y DGA de Aceite Dieléctrico de Transformador</span>
                  </li>
                )}
                {hasPowerFactorPenalty && (
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Estudio de Calidad de Energía NTCSE y Banco de Condensadores Desintonizados</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote('aee-auditoria-energetica');
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg cursor-pointer"
              >
                SOLICITAR PROPUESTA TÉCNICA
              </button>

              <button
                onClick={resetCalculator}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw size={14} />
                <span>Recalcular</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
