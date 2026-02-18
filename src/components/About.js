"use client";

const About = () => {
  return (
    <section id="à-propos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">À Propos de <span className="text-neon-400">Moi</span></h2>
          <p className="text-gray-400 text-lg font-outfit">L'essentiel en un coup d'œil.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Dashboard Principal */}
          <div className="md:col-span-2 bg-dark-card border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-neon-400/30 transition-all duration-300" data-aos="fade-right">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Développeuse <span className="text-neon-400 text-gradient">Full Stack</span>
                </h3>
                <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
                  Je transforme les problèmes complexes en interfaces simples et rapides. Basée à Madagascar 🇲🇬, je crée des solutions numériques modernes.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {icon: "fa-tachometer-alt", label: "Rapide", color: "text-neon-400"},
                  {icon: "fa-mobile-alt", label: "Responsive", color: "text-blue-400"},
                  {icon: "fa-search", label: "SEO", color: "text-purple-400"},
                  {icon: "fa-lightbulb", label: "UX Design", color: "text-yellow-400"},
                ].map((power, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                    <i className={`fas ${power.icon} ${power.color} text-xl mb-2`}></i>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-tighter">{power.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-rows-2 gap-5">
            <div className="bg-dark-card border border-white/5 rounded-3xl p-5 flex flex-col justify-center items-center hover:border-neon-400/30 transition-all duration-300 group" data-aos="fade-left">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-neon-400 transition-colors">3+</div>
              <p className="text-gray-400 text-xs uppercase tracking-widest text-center">Ans d'expérience</p>
            </div>
            <div className="bg-dark-card border border-white/5 rounded-3xl p-5 flex flex-col justify-center items-center hover:border-neon-400/30 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="100">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-neon-400 transition-colors">15+</div>
              <p className="text-gray-400 text-xs uppercase tracking-widest text-center">Projets Livrés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;