import React, { useState, useRef, useEffect } from 'react';

const portfolioItems = [
  // SOCIAL MEDIA
  {
    id: 1,
    title: 'Estrategia & Planificación',
    category: 'Social Media',
    metric: 'SMM ESTRATÉGICO',
    videoUrl: '/portfolio/social_media/social_media1.mp4',
    posterUrl: '/portfolio/social_media/social_media1_poster.jpg',
    description: 'Definición de pilares de marca, calendarios tácticos y objetivos claros para construir una presencia sólida y medible.'
  },
  {
    id: 2,
    title: 'Gestión de Comunidad',
    category: 'Social Media',
    metric: 'ENGAGEMENT & CONEXIÓN',
    videoUrl: '/portfolio/social_media/social_media2.mp4',
    posterUrl: '/portfolio/social_media/social_media2_poster.jpg',
    description: 'Conexión activa con la audiencia, moderación y dinamización de interacciones para fidelizar seguidores.'
  },
  {
    id: 3,
    title: 'Dirección Creativa',
    category: 'Social Media',
    metric: 'IDENTIDAD VISUAL',
    videoUrl: '/portfolio/social_media/social_media3.mp4',
    posterUrl: '/portfolio/social_media/social_media3_poster.jpg',
    description: 'Conceptualización visual, identidad gráfica y diseño de piezas clave adaptadas a los formatos de tendencia.'
  },
  {
    id: 4,
    title: 'Producción de Contenido',
    category: 'Social Media',
    metric: 'PRODUCCIÓN & ESTILO',
    videoUrl: '/portfolio/social_media/social_media4.mp4',
    posterUrl: '/portfolio/social_media/social_media4_poster.jpg',
    description: 'Grabación, edición y curaduría visual (reels/TikToks) enfocadas en captar retención y comunicar la esencia de la marca.'
  },

  // UGC
  {
    id: 5,
    title: 'Experiencia Brutal 58',
    category: 'UGC',
    metric: 'PRODUCCIÓN UGC / BRAND EXPERIENCE',
    videoUrl: '/portfolio/ugc/ugc_5.mp4',
    posterUrl: '/portfolio/ugc/ugc_5_poster.jpg',
    description: 'Cobertura experiencial y narrativa dinámica en las alturas para posicionar la marca a través de un storytelling gastronómico aspiracional y memorable.'
  },
  {
    id: 6,
    title: 'Activación Harina P.A.N.',
    category: 'UGC',
    metric: 'ORGÁNICO VIRAL / ACTIVACIÓN',
    videoUrl: '/portfolio/ugc/ugc_4.mp4',
    posterUrl: '/portfolio/ugc/ugc_4_poster.jpg',
    description: 'Contenido de humor con gancho rápido y formato POV en evento presencial, diseñado para conectar con la comunidad y generar engagement orgánico inmediato.'
  },
  {
    id: 7,
    title: 'Flips POV Paraíso',
    category: 'UGC',
    metric: 'COMEDIA VIRAL / TREND',
    videoUrl: '/portfolio/ugc/ugc_2.mp4',
    posterUrl: '/portfolio/ugc/ugc_2_poster.jpg',
    description: 'Pieza creativa en tendencia enfocada en identificación de marca y antojo, combinando dinamismo, humor y formato viral para retener a la audiencia.'
  },
  {
    id: 8,
    title: 'Cambio de Look Harmony',
    category: 'UGC',
    metric: 'LIFESTYLE & BEAUTY',
    videoUrl: '/portfolio/ugc/ugc_1.mp4',
    posterUrl: '/portfolio/ugc/ugc_1_poster.jpg',
    description: 'Storytelling testimonial de principio a fin mostrando proceso y resultado de belleza, transmitiendo confianza y deseo de compra de manera orgánica.'
  },
  {
    id: 9,
    title: 'Moka Ritual Coffee',
    category: 'UGC',
    metric: 'LIFESTYLE & UNBOXING',
    videoUrl: '/portfolio/ugc/ugc_3.mp4',
    posterUrl: '/portfolio/ugc/ugc_3_poster.jpg',
    description: 'Rutina de mañana estética e integración de producto enfocada en generar deseo de consumo e integrarlo de forma orgánico-aspiracional.'
  },

  // MENTORÍAS
  {
    id: 10,
    title: 'Oratoria & Cámara',
    category: 'Mentorías',
    metric: 'PROGRAMA 1:1',
    videoUrl: '/portfolio/mentorias/mentorias_1.mp4',
    posterUrl: '/portfolio/mentorias/mentorias_1_poster.jpg',
    description: 'Desenvolvimiento frente a cámara, lenguaje corporal y técnicas de modulación para comunicar con soltura.'
  },
  {
    id: 11,
    title: 'Marca Personal & Estrategia',
    category: 'Mentorías',
    metric: 'POSICIONAMIENTO',
    videoUrl: '/portfolio/mentorias/mentorias_2.mp4',
    posterUrl: '/portfolio/mentorias/mentorias_2_poster.jpg',
    description: 'Construcción de tu propuesta de valor, pilares temáticos y autoridad en tu nicho digital.'
  },
  {
    id: 12,
    title: 'Storytelling & Voz de Marca',
    category: 'Mentorías',
    metric: 'STORYTELLING 1:1',
    videoUrl: '/portfolio/mentorias/mentorias_3.mp4',
    posterUrl: '/portfolio/mentorias/mentorias_3_poster.jpg',
    description: 'Estructuras narrativas para conectar con las emociones de tu audiencia y transformar historias en ventas.'
  },
  {
    id: 13,
    title: 'Confianza & Desbloqueo',
    category: 'Mentorías',
    metric: 'CONFIANZA DIGITAL',
    videoUrl: '/portfolio/mentorias/mentorias_4.mp4',
    posterUrl: '/portfolio/mentorias/mentorias_4_poster.jpg',
    description: 'Superación de bloqueos frente a la cámara y desarrollo de un mensaje claro para proyectar seguridad.'
  },

  // EVENTOS
  {
    id: 14,
    title: 'Cobertura en Vivo',
    category: 'Eventos',
    metric: 'Live Content',
    videoUrl: '/portfolio/eventos/eventos_1.mp4',
    posterUrl: '/portfolio/eventos/eventos_1_poster.jpg',
    description: 'Creación de contenido dinámico en tiempo real para capturar la energía de tus eventos VIP.'
  },
  {
    id: 16,
    title: 'Lanzamiento de Marca',
    category: 'Eventos',
    metric: 'Experiencia Inmersiva',
    videoUrl: '/portfolio/eventos/eventos_3.mp4',
    posterUrl: '/portfolio/eventos/eventos_3_poster.jpg',
    description: 'Documentación estética y contenido audiovisual exclusivo durante lanzamientos de marca.'
  },
  {
    id: 17,
    title: 'Networking & Comunidad',
    category: 'Eventos',
    metric: 'Comunidad Real',
    videoUrl: '/portfolio/eventos/eventos_4.mp4',
    posterUrl: '/portfolio/eventos/eventos_4_poster.jpg',
    description: 'Entrevistas cortas y cápsulas en vídeo para amplificar la voz de asistentes y marcas.'
  },
  {
    id: 18,
    title: 'Experiencia Presencial',
    category: 'Eventos',
    metric: 'Cobertura 360°',
    videoUrl: '/portfolio/eventos/eventos_5.mp4',
    posterUrl: '/portfolio/eventos/eventos_5_poster.jpg',
    description: 'Resumen audiovisual de encuentros de comunidad, dinámicas y ponencias presenciales.'
  },

  // LAS 2 CARAS
  {
    id: 19,
    title: 'Las 2 Caras del UGC',
    category: 'Las 2 Caras',
    metric: 'Masterclass & Evento',
    videoUrl: '/portfolio/eventos/eventos_1.mp4',
    posterUrl: '/portfolio/eventos/eventos_1_poster.jpg',
    description: 'El encuentro exclusivo donde conectamos la estrategia de ventas con la creación de contenido auténtico.'
  },
  {
    id: 20,
    title: 'Behind The Scenes',
    category: 'Las 2 Caras',
    metric: 'Producción Real',
    videoUrl: '/portfolio/eventos/eventos_2.mp4',
    posterUrl: '/portfolio/eventos/eventos_2_poster.jpg',
    description: 'La realidad detrás de cámaras y el proceso de trabajo de una creadora UGC y estratega digital.'
  },
  {
    id: 21,
    title: 'Estrategia vs Ejecución',
    category: 'Las 2 Caras',
    metric: 'Formación 360°',
    videoUrl: '/portfolio/eventos/eventos_4.mp4',
    posterUrl: '/portfolio/eventos/eventos_4_poster.jpg',
    description: 'Cómo unir la sensibilidad visual con una visión comercial sólida para escalar tu marca.'
  },
  {
    id: 22,
    title: 'Experiencia & Comunidad',
    category: 'Las 2 Caras',
    metric: 'Comunidad Exclusiva',
    videoUrl: '/portfolio/eventos/eventos_5.mp4',
    posterUrl: '/portfolio/eventos/eventos_5_poster.jpg',
    description: 'Conectando creadores y marcas en un espacio único de aprendizaje e inspiración.'
  }
];

const categories = ['UGC', 'Mentorías', 'Social Media', 'Eventos', 'Las 2 Caras'];

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
          <h3 className="font-sans text-sm font-semibold text-[#FAF8F5] drop-shadow-sm">
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
  const [activeFilter, setActiveFilter] = useState('UGC');
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

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter);

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
              ref={modalVideoRef}
              src={activeVideo.videoUrl}
              poster={activeVideo.posterUrl}
              className="w-full h-full object-cover"
              controls
              playsInline
              loop
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
