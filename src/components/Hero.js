"use client";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-4 relative pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Texte */}
        <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 backdrop-blur border border-neon-400/30 text-neon-400 text-xs font-bold tracking-wider uppercase shadow-neon">
            <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse"></span>
            Disponible pour projets
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            Créatrice <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">dexpériences</span> <br />
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(0,245,255,0.3)] text-neon-400">Digitales</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-neon-400/50 pl-6">
            Je suis <strong className="text-white">Manoa Fanekena Ravoninjatovo</strong>, développeuse Web passionnée. Je transforme des concepts complexes en interfaces élégantes.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projets" className="group relative px-8 py-4 bg-neon-400 text-dark-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-neon">
              <span className="relative z-10 flex items-center gap-2">Voir mes projets <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i></span>
            </a>
            <a href="#contact" className="px-8 py-4 border border-gray-600 text-white font-medium rounded-xl hover:border-neon-400 hover:text-neon-400 bg-dark-800/50 backdrop-blur-sm transition-all duration-300">
              Me contacter
            </a>
          </div>
        </div>

        {/* Image Flottante */}
        <div className="order-1 lg:order-2 flex justify-center relative" data-aos="fade-left">
          <div className="absolute top-0 right-10 w-24 h-24 bg-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse-slow"></div>
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-full p-3 border border-white/10 bg-gradient-to-b from-white/5 to-transparent animate-float backdrop-blur-sm">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-dark-800 relative shadow-2xl group">
              {/* Remplace par ton image dans public/ */}
              <img src="/ton-image.jpg" alt="Manoa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-10 -left-6 bg-dark-800/90 border border-neon-400/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-neon-400/20 flex items-center justify-center text-neon-400 text-xl">
                <i className="fas fa-code"></i>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Spécialité</p>
                <p className="text-white font-bold">Full Stack Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;