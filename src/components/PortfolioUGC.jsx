import React, { useState, useRef } from 'react';

const portfolioItems = [
  // SOCIAL MEDIA (4 Slots)
  {
    id: 1,
    title: 'Estrategia & Planificación',
    category: 'Social Media',
    metric: 'SMM Estratégico',
    videoUrl: '/reels/crea_location.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    description: 'Construcción de presencia digital y planificación estratégica de contenidos.'
  },
  {
    id: 2,
    title: 'Gestión de Comunidad',
    category: 'Social Media',
    metric: 'Engagement & Conexión',
    videoUrl: '/reels/crea_team.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    description: 'Interacción auténtica y dinamización de comunidad para marcas e-commerce.'
  },
  {
    id: 3,
    title: 'Dirección Creativa',
    category: 'Social Media',
    metric: 'Identidad Visual',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    description: 'Conceptualización visual y diseño de piezas clave para redes sociales.'
  },
  {
    id: 4,
    title: 'Auditoría Digital',
    category: 'Social Media',
    metric: 'Optimización 360°',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    description: 'Análisis detallado de canales y recomendaciones tácticas de crecimiento.'
  },

  // UGC (4 Slots)
  {
    id: 5,
    title: 'CREA Espacio Creativo',
    category: 'UGC',
    metric: 'Contenido 9:16',
    videoUrl: '/reels/crea_location.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    description: 'Vídeo estético mostrando la ubicación de CREA en Sant Just Desvern.'
  },
  {
    id: 6,
    title: 'CREA Proyecto & Equipo',
    category: 'UGC',
    metric: 'Detrás de Cámaras',
    videoUrl: '/reels/crea_team.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    description: 'Montaje dinámico del equipo creativo y el ambiente de trabajo colaborativo.'
  },
  {
    id: 7,
    title: 'Moka Ritual Coffee',
    category: 'UGC',
    metric: 'Lifestyle & Unboxing',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    description: 'Rutina de mañana estética incorporando preparación de café de especialidad.'
  },
  {
    id: 8,
    title: 'Bloom Lip Oil',
    category: 'UGC',
    metric: 'Orgánico Viral',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80',
    description: 'ASMR unboxing y prueba de tonos con voz en off de oratoria persuasiva.'
  },

  // MENTORÍAS (4 Slots)
  {
    id: 9,
    title: 'Oratoria & Cámara',
    category: 'Mentorías',
    metric: 'Programa 1:1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    description: 'Desenvolvimiento frente a cámara y técnicas de modulación de voz.'
  },
  {
    id: 10,
    title: 'Marca Personal',
    category: 'Mentorías',
    metric: 'Posicionamiento',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1580894732413-a70493407422?auto=format&fit=crop&w=600&q=80',
    description: 'Construcción de propuesta de valor y comunicación con propósito.'
  },
  {
    id: 11,
    title: 'Estrategia de Voz',
    category: 'Mentorías',
    metric: 'Storytelling 1:1',
    videoUrl: '/reels/crea_location.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    description: 'Definición de pilares narrativos para conectar con tu audiencia.'
  },
  {
    id: 12,
    title: 'Desarrollo de Mensaje',
    category: 'Mentorías',
    metric: 'Confianza Digital',
    videoUrl: '/reels/crea_team.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    description: 'Superación de bloqueos creativos y seguridad para comunicar lo que haces.'
  },

  // EVENTOS (4 Slots)
  {
    id: 13,
    title: 'Cobertura en Vivo',
    category: 'Eventos',
    metric: 'Live Streaming',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    description: 'Creación de contenido dinámico en tiempo real para eventos de marca.'
  },
  {
    id: 14,
    title: 'Talleres & Workshops',
    category: 'Eventos',
    metric: 'Formación Presencial',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
    description: 'Sesiones grupales de oratoria y estrategias de comunicación práctica.'
  },
  {
    id: 15,
    title: 'Lanzamiento de Marca',
    category: 'Eventos',
    metric: 'Experiencia Inmersiva',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80',
    description: 'Documentación estética y contenido UGC durante lanzamientos VIP.'
  },
  {
    id: 16,
    title: 'Networking & Experiencia',
    category: 'Eventos',
    metric: 'Comunidad Real',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
    description: 'Entrevistas cortas y cápsulas en vídeo con asistentes y ponentes.'
  }
];

const categories = ['Todos', 'Social Media', 'UGC', 'Mentorías', 'Eventos'];

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
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#E0A890] bg-[#C48B71]/20 px-2.5 py-0.5 rounded-full border border-[#C48B71]/40 backdrop-blur-sm shadow-sm">
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
      
      {/* Top Header Controls: Centered Filter Buttons */}
      <div className="flex justify-center items-center border-b border-soft-sand/30 pb-4 w-full">
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-sage text-[#FAF8F5] shadow-md shadow-sage/20 scale-105'
                  : 'text-warm-gray border border-soft-sand/85 hover:text-charcoal hover:border-charcoal hover:bg-soft-sand/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Carousel Track - Clean Swipeable Navigation (No Buttons) */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 px-1 scroll-smooth cursor-grab active:cursor-grabbing"
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
