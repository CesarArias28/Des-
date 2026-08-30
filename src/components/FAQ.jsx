import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Cómo sé qué servicio es para mí?',
    answer: 'No necesitas tenerlo claro antes de escribirme. Cuéntame qué haces, dónde estás ahora y qué quieres conseguir. A partir de ahí podemos identificar si necesitas estrategia, Social Media Management, creación de contenido, UGC o una mentoría personalizada.'
  },
  {
    question: '¿Puedo contratarte solo para crear contenido?',
    answer: 'Sí. No necesitas contratar una gestión mensual de redes. Podemos trabajar únicamente en la creación de contenido, desde la idea y el guion hasta la grabación y edición de las piezas que necesita tu marca.'
  },
  {
    question: '¿Qué podemos trabajar en una mentoría 1:1?',
    answer: 'Todo depende de ti y de tus objetivos. Podemos trabajar comunicación, marca personal, redes sociales, creación de contenido, UGC, edición de vídeo, storytelling, estrategia, oratoria o cómo desenvolverte frente a cámara.'
  },
  {
    question: 'No sé exactamente qué necesito, ¿puedo escribirte igualmente?',
    answer: 'Claro. No tienes que llegar con todo resuelto. Parte de mi trabajo es ayudarte a entender dónde estás, qué quieres conseguir y qué camino tiene más sentido para llegar hasta allí.'
  },
  {
    question: '¿Trabajas únicamente en Barcelona?',
    answer: 'No. Trabajo con personas y marcas desde cualquier lugar. Muchos proyectos y mentorías pueden desarrollarse de forma online y, cuando el proyecto lo requiere, también podemos valorar sesiones, producciones o encuentros presenciales.'
  },
  {
    question: '¿Cómo empezamos a trabajar juntos?',
    answer: 'Muy fácil: cuéntame un poco sobre ti o tu marca, qué tienes en mente y qué te gustaría conseguir. Revisaré tu caso y veremos cuál es la mejor manera de trabajar juntos.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className="border border-soft-sand/80 rounded-[18px] bg-bone shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base font-semibold text-charcoal cursor-pointer hover:bg-soft-sand/20 transition-colors focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className={`flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full border border-warm-gray/30 text-warm-gray transition-transform duration-300 ${
                isOpen ? 'rotate-180 border-terracotta text-terracotta bg-terracotta/5' : ''
              }`}>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Answer Content */}
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-warm-gray leading-relaxed font-sans border-t border-soft-sand/40 mt-1 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
