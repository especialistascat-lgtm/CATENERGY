import React, { useState, useRef, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Upload, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Building, 
  FileText, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface QuoteSectionProps {
  preselectedServiceId?: string;
  onClearPreselected?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedServiceId,
  onClearPreselected
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || '',
    installationType: 'Planta Industrial',
    city: 'Lima, Perú',
    description: '',
    fileName: '',
    privacyAccepted: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Ingrese su nombre completo';
    if (!formData.company.trim()) errs.company = 'Ingrese el nombre de su empresa';
    if (!formData.phone.trim()) errs.phone = 'Ingrese un número de teléfono o celular';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Ingrese un correo electrónico válido';
    if (!formData.serviceId) errs.serviceId = 'Seleccione el servicio de interés';
    if (!formData.description.trim()) errs.description = 'Describa brevemente su requerimiento técnico';
    if (!formData.privacyAccepted) errs.privacyAccepted = 'Debe aceptar la política de privacidad';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ticketId = `CAT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Handled
      }
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData(prev => ({ ...prev, fileName: file.name }));
    }
  };

  const selectedServiceName = servicesData.find(s => s.id === formData.serviceId)?.name || formData.serviceId;

  const generateWhatsAppMessage = () => {
    const text = `*SOLICITUD DE COTIZACIÓN - CATENERGY SAC*
*Ticket:* ${submittedTicket || 'NUEVA'}
*Cliente:* ${formData.fullName}
*Empresa:* ${formData.company} (${formData.position || 'N/A'})
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Servicio de Interés:* ${selectedServiceName}
*Tipo de Instalación:* ${formData.installationType}
*Ubicación:* ${formData.city}
*Descripción:* ${formData.description}`;

    return `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="relative py-24 bg-[#080c14] text-white overflow-hidden">
      
      {/* Background Nature + Energy Backdrop */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/80 to-[#080c14]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono-tech">
            <Mail size={14} />
            <span>Atención Comercial y Técnica Directa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            SOLICITA TU <span className="text-[#E5A919]">COTIZACIÓN</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Complete el siguiente formulario y un ingeniero especialista de CATENERGY SAC se comunicará con usted en un plazo no mayor a 24 horas.
          </p>
        </div>

        {/* Content Layout: Contact Info Card (Left) + Interactive Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Official Company Contact Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-8 backdrop-blur-md">
            
            <div className="space-y-2">
              <span className="text-xs font-mono-tech text-amber-400 font-bold uppercase tracking-wider">
                Empresa
              </span>
              <h3 className="text-2xl font-black font-heading text-white">
                CATENERGY SAC
              </h3>
              <p className="text-xs text-slate-400">
                Gestión de Energía & Mantenimiento de Subestaciones AT/MT/BT
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4">
              
              {/* WhatsApp / Teléfono */}
              <a 
                href={`https://wa.me/${companyData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800/80 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp / Teléfono</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {companyData.phoneFormatted}
                  </div>
                  <div className="text-[11px] text-emerald-400/90 font-mono-tech mt-0.5">
                    Respuesta rápida garantizada
                  </div>
                </div>
              </a>

              {/* Correo Electrónico */}
              <a 
                href={`mailto:${companyData.email}`}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800/80 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Correo Electrónico</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-sky-400 transition-colors break-all">
                    {companyData.email}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono-tech mt-0.5">
                    Envío de TDRs y especificaciones
                  </div>
                </div>
              </a>

              {/* Ubicación */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Cobertura de Servicios</div>
                  <div className="text-sm font-bold text-white">
                    Lima y Nivel Nacional (Perú)
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Atención en Costa, Sierra y Selva
                  </div>
                </div>
              </div>

            </div>

            {/* Guarantees */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Propuestas técnicas con cálculo de ROI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Ingenieros especialistas colegiados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Instrumentos con calibración trazable INACAL</span>
              </div>
            </div>

          </div>

          {/* Right: The Quotation Form */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
            
            {isSubmitted ? (
              /* Success Confirmation View */
              <div className="space-y-6 text-center py-8 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono-tech px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    TICKET DE ATENCIÓN: {submittedTicket}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    ¡Solicitud de Cotización Registrada con Éxito!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Hemos recibido su requerimiento para el servicio de <strong className="text-amber-400">{selectedServiceName}</strong>. Nuestro equipo técnico evaluará sus datos de inmediato.
                  </p>
                </div>

                {/* Instant WhatsApp bridge button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    id="send-quote-to-whatsapp"
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
                  >
                    <PhoneCall size={16} />
                    <span>Enviar copia directa por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        position: '',
                        phone: '',
                        email: '',
                        serviceId: '',
                        installationType: 'Planta Industrial',
                        city: 'Lima, Perú',
                        description: '',
                        fileName: '',
                        privacyAccepted: true
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Registrar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              /* The Active Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre Completo */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      id="quote-fullname"
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej: Ing. Carlos Morales"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Empresa *
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej: Minera del Sur S.A."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                    {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                  </div>

                  {/* Cargo */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Cargo
                    </label>
                    <input
                      id="quote-position"
                      type="text"
                      value={formData.position}
                      onChange={e => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Ej: Jefe de Mantenimiento / Superintendente"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej: 994 782 124"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Correo Electrónico */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ej: cmorales@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Servicio de Interés */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Servicio de Interés *
                    </label>
                    <select
                      id="quote-service-select"
                      value={formData.serviceId}
                      onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="">-- Seleccione un servicio especializado --</option>
                      <optgroup label="ÁREA 01: CONSULTORÍAS EN GESTIÓN DE LA ENERGÍA">
                        {servicesData.filter(s => s.areaId === 'gestion-energia').map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="ÁREA 02: CONSULTORÍAS EN GESTIÓN DE MANTENIMIENTO">
                        {servicesData.filter(s => s.areaId === 'gestion-mantenimiento').map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="ÁREA 03: MANTENIMIENTO DE SUBESTACIONES AT / MT / BT">
                        {servicesData.filter(s => s.areaId === 'subestaciones-at-mt-bt').map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.serviceId && <p className="text-[11px] text-red-400 mt-1">{errors.serviceId}</p>}
                  </div>

                  {/* Tipo de Instalación */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Tipo de Instalación
                    </label>
                    <select
                      id="quote-installation-type"
                      value={formData.installationType}
                      onChange={e => setFormData({ ...formData, installationType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="Subestación AT/MT/BT">Subestación AT / MT / BT</option>
                      <option value="Planta Industrial / Manufactura">Planta Industrial / Manufactura</option>
                      <option value="Unidad Minera / Concentradora">Unidad Minera / Concentradora</option>
                      <option value="Edificio Corporativo / Retail">Edificio Corporativo / Retail</option>
                      <option value="Infraestructura Hospitalaria">Infraestructura Hospitalaria</option>
                      <option value="Generación / Parque Renovable">Generación / Parque Renovable</option>
                      <option value="Otro">Otro tipo de instalación</option>
                    </select>
                  </div>

                  {/* Ciudad / Ubicación */}
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Ciudad / Ubicación
                    </label>
                    <input
                      id="quote-city"
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ej: Lima, Arequipa, Trujillo, etc."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Descripción de la necesidad */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Descripción de la Necesidad Técnica *
                    </label>
                    <textarea
                      id="quote-description"
                      rows={3}
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describa equipos a intervenir, nivel de tensión (kV), potencia (kVA/MVA), fechas tentativas o problemas detectados..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm text-white placeholder:text-slate-500 outline-none transition-all resize-none"
                    />
                    {errors.description && <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>}
                  </div>

                  {/* Adjuntar Archivo (Drag and drop / Click) */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech text-slate-300 font-semibold mb-1">
                      Adjuntar Especificaciones / TDR / Planos (Opcional)
                    </label>
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      onChange={handleFileUpload}
                      className="hidden" 
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.png,.jpg,.jpeg"
                    />
                    <div
                      onDragOver={e => e.preventDefault()}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-2xl p-4 text-center bg-slate-950/40 hover:bg-slate-950/80 transition-colors cursor-pointer"
                    >
                      <Upload size={22} className="mx-auto text-amber-400 mb-1" />
                      {formData.fileName ? (
                        <div className="text-xs text-emerald-400 font-mono-tech">
                          Archivo cargado: <strong>{formData.fileName}</strong>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs text-slate-300 font-medium">
                            Arrastre y suelte su archivo aquí, o <span className="text-amber-400 underline">explore en su equipo</span>
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Formatos admitidos: PDF, Word, Excel, AutoCAD (DWG), JPG, PNG (Hasta 25MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Aceptación de política de privacidad */}
                  <div className="sm:col-span-2 flex items-start gap-2.5 pt-1">
                    <input
                      id="quote-privacy"
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={e => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 bg-slate-950 cursor-pointer"
                    />
                    <label htmlFor="quote-privacy" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                      Acepto la política de privacidad y autorizo el tratamiento de mis datos de contacto exclusivamente para la emisión de la propuesta técnica por parte de CATENERGY SAC.
                    </label>
                  </div>
                  {errors.privacyAccepted && (
                    <p className="sm:col-span-2 text-[11px] text-red-400">{errors.privacyAccepted}</p>
                  )}

                </div>

                {/* BOTÓN ENVIAR CONSULTA */}
                <div className="pt-2">
                  <button
                    id="btn-enviar-consulta"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] hover:from-[#d69814] hover:to-[#c46904] text-black font-extrabold text-sm sm:text-base tracking-wider shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>PROCESANDO REQUERIMIENTO...</span>
                      </div>
                    ) : (
                      <>
                        <span>ENVIAR CONSULTA</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
