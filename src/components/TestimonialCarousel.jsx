import React, { useState, useRef } from 'react';

const testimonialItems = [
  {
    id: 1,
    name: 'NATZIRA ANZURES',
    role: 'Mentorada 1:1 • Oratoria',
    quote: '"El primer mes logré resignificar mi relación con la cámara."',
    videoUrl: '/reels/crea_team.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    metric: 'Mentoría Oratoria'
  },
  {
    id: 2,
    name: 'GABY TABATT',
    role: 'Creadora UGC & SMM',
    quote: '"Y es que de verdad soy demasiado perfeccionista, Des me ayudó a soltar."',
    videoUrl: '/reels/crea_location.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    metric: 'UGC & Estrategia'
  },
  {
    id: 3,
    name: 'ROMINA VALENTINA',
    role: 'Emprendedora Beauty',
    quote: '"Me ayudó a ajustar mi guión para volver a lanzarme con confianza."',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    metric: 'Marca Personal'
  },
  {
    id: 4,
    name: 'CAMILLE CAMPOS',
    role: 'Fundadora E-commerce',
    quote: '"Agradezco esa visión tan clara para posicionar el mensaje de mi marca."',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    metric: 'Estrategia SMM'
  },
  {
    id: 5,
    name: 'ELENA MENDOZA',
    role: 'Aura Skincare',
    quote: '"Nuestros vídeos UGC aumentaron un 40% el engagement en anuncios."',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    metric: 'Caso de Éxito'
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
        <p className="text-xs text-[#FAF8F5] font-serif italic leading-snug drop-shadow-md bg-charcoal/40 backdrop-blur-sm p-3 rounded-[14px] border border-white/10">
          {item.quote}
        </p>
      </div>
    </div>
  );
};

export default function TestimonialCarousel() {
  const [activeVideo, setActiveVideo] = useState(null);
  const carouselRef = useRef(null);

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
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#CDB396]">
            TESTIMONIOS & MENTORÍAS 1:1
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#FAF8F5] leading-[1.08] uppercase">
            TODO ESTO EMPEZÓ <br />
            CON UNA <span className="text-[#CDB396]">IDEA</span>
          </h2>

          {/* Star Sparkle Divider Motif */}
          <div className="flex items-center justify-center gap-3 my-1">
            <div className="h-[1px] w-12 bg-[#CDB396]/40"></div>
            <span className="text-[#CDB396] text-xs">✦</span>
            <div className="h-[1px] w-12 bg-[#CDB396]/40"></div>
          </div>

          <p className="text-soft-sand/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Personas, creadores y marcas que confiaron en mí para <strong className="font-semibold text-[#CDB396]">comunicar</strong> mejor, <strong className="font-semibold text-[#CDB396]">crear</strong> contenido y <strong className="font-semibold text-[#CDB396]">potenciar</strong> su presencia digital.
          </p>
        </div>

        {/* Carousel Container with Side Navigation Arrows */}
        <div className="relative group/nav">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-charcoal/80 border border-white/20 text-[#FAF8F5] hover:bg-terracotta hover:border-terracotta transition-all duration-300 flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-md"
            aria-label="Anterior testimonio"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-charcoal/80 border border-white/20 text-[#FAF8F5] hover:bg-terracotta hover:border-terracotta transition-all duration-300 flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-md"
            aria-label="Siguiente testimonio"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

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
        <div className="flex justify-center mt-4">
          <a
            href="#contacto"
            className="inline-block text-center rounded-full bg-terracotta px-10 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAF8F5] hover:bg-terracotta/90 hover:shadow-2xl hover:shadow-terracotta/30 transition-all duration-300 hover:scale-105"
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
              src={activeVideo.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              controls
              muted={false}
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
