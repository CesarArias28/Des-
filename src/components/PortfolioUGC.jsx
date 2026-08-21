import React, { useState, useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'CREA Espacio Creativo',
    category: 'Lifestyle',
    metric: 'Estética SMM',
    videoUrl: '/reels/crea_location.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#FAF8F5] via-[#F1ECE4] to-[#7A8471]/10',
    description: 'Vídeo estético mostrando la ubicación de CREA en Sant Just Desvern, Barcelona.'
  },
  {
    id: 2,
    title: 'CREA Proyecto y Equipo',
    category: 'Lifestyle',
    metric: 'Detrás de Cámaras',
    videoUrl: '/reels/crea_team.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#FAF8F5] via-[#F1ECE4] to-[#C48B71]/15',
    description: 'Montaje dinámico del equipo creativo y el ambiente de trabajo colaborativo.'
  },
  {
    id: 3,
    title: 'Moka Ritual Coffee',
    category: 'Lifestyle',
    metric: '+18% CTR en Ads',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#F1ECE4] via-[#FAF8F5] to-[#7A8471]/5',
    description: 'Rutina de mañana estética incorporando preparación de café de especialidad.'
  },
  {
    id: 4,
    title: 'Bloom Lip Oil',
    category: 'Beauty',
    metric: 'Orgánico Viral',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#FAF8F5] via-[#F1ECE4] to-[#7A8471]/15',
    description: 'ASMR unboxing y prueba de tonos con voz en off de oratoria persuasiva.'
  },
  {
    id: 5,
    title: 'Aura Fine Jewelry',
    category: 'Fashion',
    metric: '+42% Engagement',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#F1ECE4] via-[#FAF8F5] to-[#C48B71]/10',
    description: 'Macro tomas estéticas mostrando los detalles de piezas de plata reciclada.'
  },
  {
    id: 6,
    title: 'Zen Mat Yoga',
    category: 'Lifestyle',
    metric: '85K Reproducciones',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    bgClass: 'from-[#FAF8F5] via-[#F1ECE4] to-[#7A8471]/20',
    description: 'Contenido lifestyle estético integrando el uso de tapete antideslizante.'
  }
];

const categories = ['Todos', 'Beauty', 'Lifestyle', 'Fashion'];

// Individual Card Component to handle play-on-hover logic with refs
const UgcCard = ({ item, onSelect }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        // Handle potential autoplay interrupts or locks
        console.log("Hover video play blocked:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to beginning to show the poster cover again
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[9/16] w-[280px] sm:w-[320px] shrink-0 snap-start rounded-[22px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:scale-[1.02] hover:border-sage/50 transition-all duration-500 flex flex-col justify-between p-6 border border-soft-sand/50 group bg-charcoal"
    >
      {/* Live Video Preview Background */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.posterUrl}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700"
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Gradient Overlay for aesthetic blending and legibility - Very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/50" />

      {/* Card Header (Metric Tag Liquid Glass) */}
      <div className="self-start relative z-10">
        <span className="bg-white/20 backdrop-blur-md border border-white/35 text-[#FAF8F5] px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase shadow-md shadow-black/10">
          {item.metric}
        </span>
      </div>

      {/* Card Center (Play Icon Overlay Liquid Glass) */}
      <div className="flex items-center justify-center relative z-10">
        <div className="bg-white/25 backdrop-blur-lg border border-white/40 text-[#FAF8F5] h-14 w-14 rounded-full flex items-center justify-center shadow-xl shadow-black/20 group-hover:scale-110 group-hover:bg-sage group-hover:border-sage transition-all duration-300">
          <svg className="h-5 w-5 ml-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Card Footer (Liquid Glass Panel) */}
      <div className="bg-white/15 backdrop-blur-xl border border-white/30 p-4 rounded-[18px] shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] flex flex-col gap-1.5 transform group-hover:translate-y-[-2px] group-hover:border-white/50 transition-all duration-300 relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="font-serif text-base font-medium text-[#FAF8F5] drop-shadow-sm">
            {item.title}
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#B8FF44] bg-white/10 px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm">
            {item.category}
          </span>
        </div>
        <p className="text-[11px] text-[#FAF8F5]/85 leading-relaxed font-light drop-shadow-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default function PortfolioUGC() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [activeVideo, setActiveVideo] = useState(null);
  const carouselRef = useRef(null);

  const filteredItems = activeFilter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-8 relative">
      
      {/* Top Header Controls: Filter Buttons + Carousel Arrows */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-soft-sand/30 pb-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-sage text-[#FAF8F5] shadow-md shadow-sage/10'
                  : 'text-warm-gray border border-soft-sand/85 hover:text-charcoal hover:border-charcoal hover:bg-soft-sand/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Glassmorphism Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollCarousel('left')}
            className="h-10 w-10 rounded-full border border-soft-sand/80 bg-[#FAF8F5]/80 backdrop-blur-md text-charcoal hover:bg-sage hover:text-[#FAF8F5] hover:border-sage transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Anterior"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollCarousel('right')}
            className="h-10 w-10 rounded-full border border-soft-sand/80 bg-[#FAF8F5]/80 backdrop-blur-md text-charcoal hover:bg-sage hover:text-[#FAF8F5] hover:border-sage transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Siguiente"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 px-1 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {filteredItems.map((item) => (
          <UgcCard
            key={item.id}
            item={item}
            onSelect={setActiveVideo}
          />
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative aspect-[9/16] h-[85vh] max-h-[800px] w-full max-w-sm rounded-[24px] overflow-hidden shadow-2xl bg-[#FAF8F5] border border-soft-sand/50 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-[#FAF8F5] bg-charcoal/40 hover:bg-charcoal/80 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition-all border border-soft-sand/30 z-10"
              aria-label="Cerrar video"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* HTML5 Video Player */}
            <video
              src={activeVideo.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              controls
              muted={false}
            >
              Su navegador no soporta reproducción de video.
            </video>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-6 text-[#FAF8F5] pt-12">
              <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta mb-1 block">
                {activeVideo.category} • {activeVideo.metric}
              </span>
              <h4 className="font-serif text-lg font-semibold mb-1">
                {activeVideo.title}
              </h4>
              <p className="text-xs text-[#FAF8F5]/80 leading-relaxed font-light">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
