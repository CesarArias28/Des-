import React, { useState } from 'react';

const brandFaqs = [
  {
    question: '¿Cómo es el proceso de trabajo para la creación de contenido UGC?',
    answer: 'El proceso incluye 4 fases esenciales: 1) Briefing y alineación de objetivos de marca, 2) Redacción y aprobación de los guiones (donde integramos ganchos de retención y psicología de ventas), 3) Fase de grabación estética y edición dinámica, y 4) Entrega final del contenido vertical optimizado en WebM/MP4 listo para publicar o pautar.'
  },
  {
    question: '¿Ofreces gestión mensual de redes sociales (SMM) o servicios puntuales?',
    answer: 'Ofrezco ambos formatos. La gestión integral de redes sociales (SMM) se contrata bajo fee mensual con un compromiso mínimo de 3 meses para poder auditar, trazar una estrategia con base científica y ver resultados reales. Para marcas con equipo interno, realizo auditorías de comunicación y consultorías estratégicas de forma puntual.'
  },
  {
    question: '¿Qué nichos de mercado trabajas en la creación de contenido UGC?',
    answer: 'Me especializo en marcas conscientes de e-commerce dentro de los sectores de Belleza & Cuidado de la piel (Skincare), Moda Sostenible, Bienestar (Wellness) y Estilo de Vida (Lifestyle). Mi objetivo es alinear la estética limpia de tu marca con una narrativa orgánica que convierta espectadores en clientes.'
  }
];

const creatorFaqs = [
  {
    question: '¿A quién están dirigidas las mentorías de oratoria y cámara?',
    answer: 'Están dirigidas a emprendedores que desean humanizar sus marcas y vender con confianza ante la cámara, profesionales que quieren potenciar su marca personal a través de la comunicación verbal y no verbal, y creadores de contenido que buscan profesionalizar su oratoria para cerrar mejores colaboraciones.'
  },
  {
    question: '¿Las mentorías son grupales o individuales 1:1?',
    answer: 'Mis mentorías son exclusivamente individuales (1:1). Creo firmemente que la comunicación es sumamente personal y que cada alumno tiene bloqueos o fortalezas diferentes. Trabajamos a tu propio ritmo para destrabar el miedo escénico, pulir tu lenguaje corporal y dominar la voz.'
  },
  {
    question: '¿Qué duración tiene el programa de mentoría y qué incluye?',
    answer: 'El programa de mentoría estándar consta de 4 sesiones semanales intensivas de 1 hora vía Zoom. Incluye feedback personalizado de tus prácticas, soporte diario directo por WhatsApp durante el mes de acompañamiento, y el acceso a mi biblioteca de plantillas estructuradas de guiones de oratoria consciente.'
  }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('brand'); // 'brand' or 'creator'
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = activeTab === 'brand' ? brandFaqs : creatorFaqs;

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      
      {/* Tab Switcher */}
      <div className="flex justify-center border border-soft-sand/80 p-1 rounded-full bg-soft-sand/20">
        <button
          onClick={() => {
            setActiveTab('brand');
            setOpenIndex(null);
          }}
          className={`flex-1 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
            activeTab === 'brand'
              ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
              : 'text-warm-gray hover:text-charcoal'
          }`}
        >
          Para Marcas (SMM/UGC)
        </button>
        <button
          onClick={() => {
            setActiveTab('creator');
            setOpenIndex(null);
          }}
          className={`flex-1 py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
            activeTab === 'creator'
              ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
              : 'text-warm-gray hover:text-charcoal'
          }`}
        >
          Para Alumnos (Mentoría)
        </button>
      </div>

      {/* Accordion Questions */}
      <div className="flex flex-col gap-4">
        {currentFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border border-soft-sand/80 rounded-[18px] bg-soft-sand/15 overflow-hidden transition-all duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base font-semibold text-charcoal cursor-pointer hover:bg-soft-sand/25 transition-colors focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className={`flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full border border-warm-gray/30 text-warm-gray transition-transform duration-300 ${
                  isOpen ? 'rotate-180 border-sage text-sage bg-sage/5' : ''
                }`}>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Answer Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-52 border-t border-soft-sand/50' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="px-6 py-5 text-sm text-warm-gray leading-relaxed bg-[#FAF8F5]/30">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
