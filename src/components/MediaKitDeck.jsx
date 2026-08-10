import React, { useState, useEffect } from 'react';

export default function MediaKitDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#FAF8F5] border border-soft-sand/80 rounded-[24px] shadow-xl overflow-hidden flex flex-col min-h-[600px] relative">
      
      {/* Top Progress Bar */}
      <div className="w-full bg-soft-sand/50 h-1.5 flex">
        <div 
          className="bg-sage h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide Counter Header */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-soft-sand/40 text-warm-gray text-xs font-semibold uppercase tracking-widest">
        <span>Des @desmenesesm</span>
        <span>Slide {currentSlide + 1} de {totalSlides}</span>
      </div>

      {/* Slides Content Container */}
      <div className="flex-grow flex items-center p-8 sm:p-12 relative overflow-hidden">
        
        {/* Slide 1: Cover */}
        {currentSlide === 0 && (
          <div className="w-full flex flex-col gap-6 text-left animate-fade-in">
            <span className="bg-terracotta/10 text-terracotta text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full self-start">
              Dossier de Presentación & Media Kit 2026
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-charcoal leading-[1.1]">
              Comunicar para <br />
              <span class="italic text-sage">conectar con alma</span>.
            </h1>
            <p className="text-warm-gray text-base sm:text-lg leading-relaxed max-w-xl">
              Social Media Strategy, creación de contenido vertical UGC y mentoría 1:1. Diseñando narrativas estéticas y estratégicas para impulsar marcas y creadores conscientes.
            </p>
            <button
              onClick={handleNext}
              className="mt-4 self-start inline-flex items-center gap-2 rounded-full bg-charcoal text-[#FAF8F5] px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/90 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Ver Presentación</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}

        {/* Slide 2: About Me */}
        {currentSlide === 1 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative aspect-[3/4] h-72 rounded-[20px] overflow-hidden bg-soft-sand border border-soft-sand/50 shadow-md">
                <img 
                  src="/reels/foto de perfil.jpg" 
                  alt="Des Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Sobre Mí</span>
              <h2 class="font-serif text-3xl font-medium text-charcoal">Des Meneses</h2>
              <h3 class="text-xs font-semibold uppercase tracking-wider text-sage -mt-2">Licenciada en Comunicación Social</h3>
              <p className="text-warm-gray text-sm leading-relaxed mt-2">
                Con una sólida base académica y profesional, mi enfoque digital se desmarca del corporativismo invasivo. Investigo y planifico cada pieza de contenido con psicología de ventas y oratoria consciente. 
              </p>
              <p className="text-warm-gray text-sm leading-relaxed">
                Tanto en la gestión estratégica de tus redes (SMM) como en la producción UGC o mentorías personalizadas, mi misión es hacer que tu marca brille de forma real y sostenible.
              </p>
              <div className="mt-2">
                <span className="font-serif text-lg italic text-charcoal">Des.</span>
              </div>
            </div>
          </div>
        )}

        {/* Slide 3: UGC Videos Showcase */}
        {currentSlide === 2 && (
          <div className="w-full flex flex-col gap-6 text-left animate-fade-in">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Portfolio de Reels</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">Vídeo UGC en Acción</h2>
            </div>
            
            {/* Horizontal side-by-side vertical videos */}
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto w-full">
              
              {/* Video Frame 1 */}
              <div className="flex flex-col gap-2">
                <div className="relative aspect-[9/16] w-full rounded-[18px] overflow-hidden border border-soft-sand shadow-md bg-soft-sand">
                  <video 
                    src="/reels/crea_location.mp4" 
                    poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                  />
                </div>
                <span className="text-center font-serif text-xs font-semibold text-charcoal">CREA Espacio Físico</span>
              </div>

              {/* Video Frame 2 */}
              <div className="flex flex-col gap-2">
                <div className="relative aspect-[9/16] w-full rounded-[18px] overflow-hidden border border-soft-sand shadow-md bg-soft-sand">
                  <video 
                    src="/reels/crea_team.mp4" 
                    poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                  />
                </div>
                <span className="text-center font-serif text-xs font-semibold text-charcoal">CREA Detrás de Cámaras</span>
              </div>

            </div>
          </div>
        )}

        {/* Slide 4: Rates & Packages */}
        {currentSlide === 3 && (
          <div className="w-full flex flex-col gap-6 text-left animate-fade-in">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">Servicios</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">Tarifas & Paquetes 2026</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
              
              {/* Package 1 */}
              <div className="border border-soft-sand/80 bg-soft-sand/15 p-6 rounded-[20px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">UGC Express</h3>
                  <p className="text-[11px] text-warm-gray leading-relaxed mb-4">Ideal para probar formatos. Incluye planificación, guionizado estratégico y edición.</p>
                </div>
                <div className="border-t border-soft-sand/65 pt-4 mt-2">
                  <span className="text-[10px] uppercase font-bold text-sage block">4 Videos UGC / Mes</span>
                  <span className="font-serif text-lg font-medium text-charcoal">Desde 290€</span>
                </div>
              </div>

              {/* Package 2 */}
              <div className="border border-sage/40 bg-soft-sand/25 p-6 rounded-[20px] flex flex-col justify-between relative">
                <span className="absolute -top-3 left-6 bg-sage text-[#FAF8F5] text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Recomendado</span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">UGC Impacto</h3>
                  <p className="text-[11px] text-warm-gray leading-relaxed mb-4">Packs optimizados para campañas y ads. Ganchos de alta conversión y llamadas a la acción.</p>
                </div>
                <div className="border-t border-soft-sand/65 pt-4 mt-2">
                  <span className="text-[10px] uppercase font-bold text-sage block">8 Videos UGC / Mes</span>
                  <span className="font-serif text-lg font-medium text-charcoal">Desde 550€</span>
                </div>
              </div>

              {/* Package 3 */}
              <div className="border border-soft-sand/80 bg-soft-sand/15 p-6 rounded-[20px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-semibold text-charcoal mb-2">Social Media Strategy</h3>
                  <p className="text-[11px] text-warm-gray leading-relaxed mb-4">Gestión completa de redes sociales, auditorías, calendario mensual y analítica profunda.</p>
                </div>
                <div className="border-t border-soft-sand/65 pt-4 mt-2">
                  <span className="text-[10px] uppercase font-bold text-sage block">Gestión Mensual SMM</span>
                  <span className="font-serif text-lg font-medium text-charcoal">Desde 700€/mes</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Slide 5: Contact */}
        {currentSlide === 5 - 1 && (
          <div className="w-full flex flex-col items-center gap-6 text-center animate-fade-in">
            <span className="bg-sage/10 text-sage text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Trabajemos Juntas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal max-w-lg">
              ¿Lista para potenciar la comunicación de tu marca?
            </h2>
            <p className="text-warm-gray text-sm leading-relaxed max-w-sm">
              Escríbeme para agendar una llamada exploratoria gratuita de 15 minutos y diseñemos el plan ideal.
            </p>
            
            <div className="flex flex-col gap-2 mt-2">
              <a 
                href="mailto:hola@desmenesesm.com" 
                className="font-serif text-lg font-medium text-charcoal hover:text-sage transition-colors underline decoration-sage/50"
              >
                hola@desmenesesm.com
              </a>
              <span className="text-xs text-warm-gray">Instagram: @desmenesesm</span>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-bone transition-all duration-300"
              >
                <span>Volver a la Web</span>
              </a>
              <button
                onClick={() => setCurrentSlide(0)}
                className="inline-flex items-center gap-2 rounded-full bg-sage text-[#FAF8F5] px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-sage/90 transition-all duration-300 cursor-pointer"
              >
                <span>Reiniciar Deck</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Deck Controls */}
      <div className="flex justify-between items-center px-8 py-6 border-t border-soft-sand/40 bg-soft-sand/10">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-soft-sand text-charcoal cursor-pointer transition-all ${
            currentSlide === 0
              ? 'opacity-40 cursor-not-allowed border-soft-sand/40 text-warm-gray'
              : 'hover:bg-soft-sand'
          }`}
          aria-label="Diapositiva anterior"
        >
          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Bullet indicators */}
        <div className="flex gap-2.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'w-6 bg-sage' : 'w-2 bg-soft-sand/80 hover:bg-warm-gray/40'
              }`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-soft-sand text-charcoal cursor-pointer transition-all ${
            currentSlide === totalSlides - 1
              ? 'opacity-40 cursor-not-allowed border-soft-sand/40 text-warm-gray'
              : 'hover:bg-soft-sand'
          }`}
          aria-label="Diapositiva siguiente"
        >
          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}
