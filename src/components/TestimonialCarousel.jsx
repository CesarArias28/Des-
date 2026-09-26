import React, { useState, useRef, useEffect } from 'react';

const testimonialItems = [
  {
    id: 1,
    name: 'DANIELA CISNEROS',
    role: 'Maquilladora Profesional',
    quote: '"Logré grabar contenido de máxima calidad para mi marca con un acompañamiento increíble."',
    videoUrl: '/testimonios/daniela_cisneros.mp4',
    posterUrl: '/testimonios/daniela_cisneros_poster.jpg',
    metric: 'CONTENIDO DE MARCA'
  },
  {
    id: 2,
    name: 'LAURA CORTÉS',
    role: 'Mentorada 1:1 • Oratoria',
    quote: '"Es la guía ideal si no sabes por dónde empezar a grabarte ni cómo quitarte el miedo a la cámara."',
    videoUrl: '/testimonios/laura_cortes.mp4',
    posterUrl: '/testimonios/laura_cortes_poster.jpg',
    metric: 'PERDER EL MIEDO'
  },
  {
    id: 3,
    name: 'LINA LUNADEMI',
    role: 'Creadora & Emprendedora',
    quote: '"Aprendí a estructurar guiones, ganar soltura frente a la cámara y activar mi contenido en redes."',
    videoUrl: '/testimonios/lina_lunademi.mp4',
    posterUrl: '/testimonios/lina_lunademi_poster.jpg',
    metric: 'GUIONES & ESTRUCTURA'
  },
  {
    id: 4,
    name: 'MARCELA CASTAÑO',
    role: 'Mentorada 1:1 • Oratoria',
    quote: '"Me ayudó a corregir muletillas, perder el miedo a hablar a la cámara y transmitir seguridad."',
    videoUrl: '/testimonios/marcela_castano.mp4',
    posterUrl: '/testimonios/marcela_castano_poster.jpg',
    metric: 'MULETILLAS & CONFIANZA'
  }
];

const TestimonialCard = ({ item, onSelect }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Hover video blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 snap-start rounded-[24px] overflow-hidden cursor-pointer shadow-xl hover:scale-[1.02] border border-white/20 transition-all duration-500 flex flex-col justify-between p-5 group bg-charcoal"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.posterUrl}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-700"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Gradient Mask Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal/90" />

      {/* Top Header: Client Name Overlaid */}
      <div className="relative z-10 text-center pt-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-terracotta bg-[#FAF8F5]/90 px-3 py-1 rounded-full shadow-sm">
          {item.metric}
        </span>
        <h3 className="font-sans text-sm font-black uppercase tracking-wider text-[#FAF8F5] drop-shadow-md mt-3">
          {item.name}
        </h3>
        <p className="text-[10px] text-[#FAF8F5]/80 font-light tracking-wide">
          {item.role}
        </p>
      </div>

      {/* Center Play Button Icon */}
      <div className="flex items-center justify-center relative z-10">
        <div className="bg-[#FAF8F5]/90 backdrop-blur-md text-charcoal h-14 w-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-terracotta group-hover:text-[#FAF8F5] transition-all duration-300">
          <svg className="h-6 w-6 ml-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom Subtitles / Quote Snippet */}
      <div className="relative z-10 text-center pb-2 px-2">
        <p className="text-[11px] text-[#FAF8F5]/90 font-sans font-light leading-relaxed drop-shadow-sm bg-white/15 backdrop-blur-xl p-3.5 rounded-[18px] border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]">
          {item.quote}
        </p>
      </div>
    </div>
  );
};

export default function TestimonialCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);
  const carouselRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      const playPromise = modalVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Unmuted autoplay blocked, attempting muted fallback:", err);
          if (modalVideoRef.current) {
            modalVideoRef.current.muted = true;
            modalVideoRef.current.play().catch(e => console.error(e));
          }
        });
      }
    }
  }, [activeVideo]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal relative overflow-hidden text-[#FAF8F5]">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-sage/20 blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CDB396]">
            TESTIMONIOS & MENTORÍAS 1:1
          </span>
          
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FAF8F5] leading-[0.95]">
            TODO ESTO EMPEZÓ <br />
            CON UNA <span className="text-[#CDB396]">IDEA</span>
          </h2>

          <p className="text-soft-sand/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Personas, creadores y marcas que confiaron en mí para <strong className="font-semibold text-[#CDB396]">comunicar</strong> mejor, <strong className="font-semibold text-[#CDB396]">crear</strong> contenido y <strong className="font-semibold text-[#CDB396]">potenciar</strong> su presencia digital.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Horizontal Carousel Riel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-6 px-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialItems.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
                onSelect={setActiveVideo}
              />
            ))}
          </div>
        </div>

        {/* Bottom Prominent CTA Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/34677963943?text=%C2%A1Hola%20Des!%20Me%20interesa%20reservar%20una%20mentor%C3%ADa%201:1."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center rounded-full bg-terracotta px-12 sm:px-16 py-5 text-sm sm:text-base font-black uppercase tracking-widest text-[#FAF8F5] hover:bg-terracotta/90 hover:shadow-2xl hover:shadow-terracotta/40 transition-all duration-300 hover:scale-105 shadow-xl shadow-terracotta/25"
          >
            Reserva tu Mentoría Ahora
          </a>
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative aspect-[9/16] h-[85vh] max-h-[800px] w-full max-w-sm rounded-[28px] overflow-hidden shadow-2xl bg-charcoal border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-[#FAF8F5] bg-charcoal/60 hover:bg-charcoal h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all border border-white/20 z-10"
              aria-label="Cerrar video"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <video
              ref={modalVideoRef}
              src={activeVideo.videoUrl}
              poster={activeVideo.posterUrl}
              className="w-full h-full object-cover"
              controls
              playsInline
              loop
            >
              Tu navegador no soporta reproducción de vídeo.
            </video>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-6 text-[#FAF8F5] pt-12">
              <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta mb-1 block">
                {activeVideo.role}
              </span>
              <h4 className="font-black text-base uppercase mb-1">
                {activeVideo.name}
              </h4>
              <p className="text-xs text-soft-sand font-serif italic leading-relaxed">
                {activeVideo.quote}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
